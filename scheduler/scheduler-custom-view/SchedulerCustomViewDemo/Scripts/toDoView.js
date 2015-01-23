//Custom View 
(function ($, undefined) {
    var kendo = window.kendo,
    ui = kendo.ui,
    SchedulerView = ui.SchedulerView,
    extend = $.extend,
    NS = ".kendoToDoView",
    DATA_HEADER_TEMPLATE = kendo.template("<span class='k-link k-nav-day'>#=kendo.toString(date, 'ddd M/dd')#</span>"),
    EVENT_TEMPLATE = '<div class="k-task"' +
                            'title="#:title.replace(/"/g,"\'")#" ' +
                            'data-#=kendo.ns#uid="#=uid#"' +
                            '#if (resources[0]) { #' +
                                'style="color:#=resources[0].color#;"' +
                            '#}#>' +
                            "# if (data.isException()) { #" +
                                '<span class="k-icon k-i-exception"></span>' +
                            '# } else if (data.isRecurring()) {#' +
                                '<span class="k-icon k-i-refresh"></span>' +
                            "# } #" +
                            '#:title#' +
                            '#if (showDelete) {#' +
                               '<a href="\\#" class="k-link k-task-delete"><span class="k-icon k-si-close"></span></a>' +
                            '#}#' +
                            '</div>';

    function getWorkDays(options) {
        var workDays = [];
        var dayIndex = options.workWeekStart;

        workDays.push(dayIndex);

        while (options.workWeekEnd != dayIndex) {
            if (dayIndex > 6) {
                dayIndex -= 7;
            } else {
                dayIndex++;
            }
            workDays.push(dayIndex);
        }
        return workDays;
    }

    var ToDoView = SchedulerView.extend({
        init: function (element, options) {
            var that = this;

            SchedulerView.fn.init.call(that, element, options);

            that.title = that.options.title || that.options.name;

            //get workDays to color them
            that._workDays = getWorkDays(that.options);

            that._templates();

            that._editable();

            //render base layout of the view
            that._renderLayout();
        },

        name: "toDo",

        options: {
            title: "To Do",
            selectedDateFormat: "{0:D} - {1:D}",
            dateHeaderTemplate: DATA_HEADER_TEMPLATE,
            eventTemplate: EVENT_TEMPLATE
        },

        _editable: function () {
            var that = this;

            that.element.on("click" + NS, ".k-task a:has(.k-si-close)", function (e) {
                that.trigger("remove", { uid: $(this).closest(".k-task").attr(kendo.attr("uid")) });
                e.preventDefault();
            });

            if (that.options.editable.update !== false) {
                that.element.on("dblclick" + NS, ".k-scheduler-content td", function (e) {
                    var cell = $(this);
                    if (cell.children().length) {
                        that.trigger("edit", { uid: cell.find(".k-task").attr(kendo.attr("uid")) });
                        e.preventDefault();
                    }
                });
            }

            if (that.options.editable.create !== false) {
                that.element.on("dblclick" + NS, ".k-scheduler-content td", function (e) {
                    var cell = $(this);
                    if (!cell.children().length) {
                        var dayIndex = cell.index();
                        var startDate = kendo.date.addDays(that.startDate(), dayIndex);
                        var endDate = new Date(startDate.getTime() + (60 * 60 * 1000));
                        that.trigger("add", { eventInfo: { title: "No Title", start: startDate, end: endDate } });
                        e.preventDefault();
                    }
                });
            }
        },

        _templates: function () {
            var options = this.options;
            var settings = extend({}, kendo.Template, options.templateSettings);

            this.dateHeaderTemplate = kendo.template(options.dateHeaderTemplate, settings);
            this._eventTemplate = kendo.template(options.eventTemplate);
        },

        startDate: function () {
            return this._startDate;
        },

        endDate: function () {
            return this._endDate;
        },

        nextDate: function () {
            return kendo.date.nextDay(this.endDate());
        },

        previousDate: function () {
            return kendo.date.previousDay(this.startDate());
        },

        calculateDateRange: function () {
            var selectedDate = this.options.date,
                start = kendo.date.dayOfWeek(selectedDate, this.calendarInfo().firstDay, -1),
                idx, length,
                dates = [];

            for (idx = 0, length = 7; idx < length; idx++) {
                dates.push(start);
                start = kendo.date.nextDay(start);
            }

            return dates;
        },

        _renderLayout: function () {
            var dates = this.calculateDateRange();

            dates = dates || [];

            this._dates = dates;
            this._startDate = dates[0];
            this._endDate = dates[(dates.length - 1) || 0];

            this.createLayout(this._layout(dates));
        },

        _layout: function (dates) {
            var that = this;
            var columns = [];
            var options = that.options;

            for (var idx = 0; idx < dates.length; idx++) {
                var column = {};

                column.text = that.dateHeaderTemplate({
                    date: dates[idx]
                });

                if (kendo.date.isToday(dates[idx])) {
                    column.className = "k-today";
                }

                columns.push(column);
            }

            return {
                columns: columns,
                rows: []
            };
        },

        render: function (events) {
            var that = this;
            var table = that.content.find("table").empty();
            var groupsByDay = [];

            if (events.length > 0) {
                //group resources by day
                groupsByDay = that._tasks(events);
                table.append(that._renderTasks(groupsByDay, []));
            } else {
                var tableContent = '';
                for (var dateIndex = 0; dateIndex < that._dates.length; dateIndex++) {
                    var isToday = kendo.date.isToday(that._dates[dateIndex]);
                    tableContent += '<td ' + (isToday ? 'class="k-today"' : '') + '></td>';
                }
                table.append('<tr>' + tableContent + '</rt>');
            }

            that.refreshLayout();
            that.trigger("activate");
        },

        //get needed tasks from dataSource
        _tasks: function (events) {
            var tasks = [];

            for (var idx = 0; idx < events.length; idx++) {
                var event = events[idx];
                var start = event.start;
                var end = event.end;

                if (event.isAllDay) {
                    end = kendo.date.nextDay(end);
                }

                var eventDurationInDays = Math.ceil((end - start) / kendo.date.MS_PER_DAY);

                if (!event.isAllDay && eventDurationInDays === 1 && kendo.date.getDate(end).getTime() !== kendo.date.getDate(start).getTime()) {
                    eventDurationInDays += 1;
                }

                var task = event.clone();
                task.startDate = kendo.date.getDate(start);

                if (task.startDate >= this.startDate()) {
                    tasks.push(task);
                }

                if (eventDurationInDays > 1) {
                    task.end = kendo.date.nextDay(start);
                    task.head = true;
                    for (var day = 1; day < eventDurationInDays; day++) {
                        start = task.end;
                        task = event.clone();
                        task.start = start;
                        task.startDate = kendo.date.getDate(start);
                        task.end = kendo.date.nextDay(start);
                        if (day == eventDurationInDays - 1) {
                            task.end = new Date(task.start.getFullYear(), task.start.getMonth(), task.start.getDate(), end.getHours(), end.getMinutes(), end.getSeconds(), end.getMilliseconds());
                            task.tail = true;
                        } else {
                            task.isAllDay = true;
                            task.middle = true;
                        }

                        if (task.end <= this.endDate() && task.start >= this.startDate()) {
                            tasks.push(task);
                        }
                    }
                }
            }

            return new kendo.data.Query(tasks).sort([{
                field: "start",
                dir: "asc"
            }, {
                field: "end",
                dir: "asc"
            }]).groupBy({
                field: "startDate"
            }).toArray();
        },

        _renderTasks: function (tasksGroupsByDay, groups) {
            var that = this;
            var tableRows = [];
            var dateGroupMapping = {};
            var maxRowCount = 0;
            var groupIndex = 0;

            //calculate max number of table rows needed
            maxRowCount = this._getMaxGroupCount(tasksGroupsByDay);

            //for each date create table column:
            for (var dateIndex = 0; dateIndex < that._dates.length; dateIndex++) {
                var currentDate = that._dates[dateIndex];
                var isToday = kendo.date.isToday(currentDate);
                var currentGroup = null;

                if (tasksGroupsByDay[groupIndex] && tasksGroupsByDay[groupIndex].value.getTime() === currentDate.getTime()) {
                    currentGroup = tasksGroupsByDay[groupIndex];
                    groupIndex++;
                }

                //create all rows for current date:
                for (var rowIndex = 0; rowIndex <= maxRowCount; rowIndex++) {
                    if (dateIndex === 0) {
                        tableRows[rowIndex] += '<tr>';
                    }

                    var task = currentGroup ? currentGroup.items[rowIndex] : null;
                    tableRows[rowIndex] += this._generateCellContent(task, isToday);

                    if (rowIndex + 1 == maxRowCount) {
                        tableRows[rowIndex] += '<\tr>';
                    }
                }
            }

            return tableRows.join("");
        },

        _getMaxGroupCount: function (group) {
            var maxCount = 0;

            for (var groupIndex = 0; groupIndex < group.length; groupIndex++) {
                var groupLength = group[groupIndex].items.length;
                if (groupLength > maxCount) {
                    maxCount = groupLength;
                }
            }

            return maxCount;
        },

        _generateCellContent: function (task, isToday) {
            if (task) {
                var resources = this.eventResources(task),
                editable = this.options.editable;

                //build data needed by template
                var templateData = extend({}, {
                    ns: kendo.ns,
                    resources: resources,
                    showDelete: editable && editable.destroy !== false
                }, task)

                return '<td ' +
                    (isToday ? 'class="k-today"' : '') +
                    ' style="overflow: hidden">' +
                    this._eventTemplate(templateData) +
                    '</td>';
            } else {
                return '<td ' + (isToday ? 'class="k-today"' : '') + '></td>';
            }
        },

        //detach events
        destroy: function () {
            if (this.element) {
                this.element.off(NS);
            }
            ui.SchedulerView.fn.destroy.call(this);
        }
    })

    //extend UI
    extend(true, ui, {
        ToDoView: ToDoView
    });

})(window.kendo.jQuery);