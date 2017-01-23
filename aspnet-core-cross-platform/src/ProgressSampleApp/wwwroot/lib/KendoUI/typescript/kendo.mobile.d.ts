// Type definitions for Kendo UI Professional v2016.3.1118
// Project: http://www.telerik.com/kendo-ui
// Definitions by: Telerik <https://github.com/telerik/>

declare namespace kendo {
    function culture(): {
        name: string;
        calendar: {
            AM: string[];
            PM: string[];
            days: {
                names: string[];
                namesAbbr: string[];
                namesShort: string[];
                firstDay: number;
            };
            months: {
                names: string[];
                namesAbbr: string[];
            };
            patterns: {
                D: string;
                F: string;
                G: string;
                M: string;
                T: string;
                Y: string;
                d: string;
                g: string;
                m: string;
                s: string;
                t: string;
                u: string;
                y: string;
            };
            twoDigitYearMax: number;
        };
        calendars: {
            standard: {
                AM: string[];
                PM: string[];
                days: {
                    names: string[];
                    namesAbbr: string[];
                    namesShort: string[];
                    firstDay: number;
                };
                months: {
                    names: string[];
                    namesAbbr: string[];
                };
                patterns: {
                    D: string;
                    F: string;
                    G: string;
                    M: string;
                    T: string;
                    Y: string;
                    d: string;
                    g: string;
                    m: string;
                    s: string;
                    t: string;
                    u: string;
                    y: string;
                };
                twoDigitYearMax: number;
            };
        };
        numberFormat: {
            currency: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
            decimals: number;
            groupSize: number[];
            pattern: string[];
            percent: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
        };
    };

    var cultures: {[culture: string] : {
        name?: string;
        calendar?: {
            AM: string[];
            PM: string[];
            days: {
                names: string[];
                namesAbbr: string[];
                namesShort: string[];
                firstDay: number;
            };
            months: {
                names: string[];
                namesAbbr: string[];
            };
            patterns: {
                D: string;
                F: string;
                G: string;
                M: string;
                T: string;
                Y: string;
                d: string;
                g: string;
                m: string;
                s: string;
                t: string;
                u: string;
                y: string;
            };
            twoDigitYearMax: number;
        };
        calendars?: {
            standard: {
                AM: string[];
                PM: string[];
                days: {
                    names: string[];
                    namesAbbr: string[];
                    namesShort: string[];
                    firstDay: number;
                };
                months: {
                    names: string[];
                    namesAbbr: string[];
                };
                patterns: {
                    D: string;
                    F: string;
                    G: string;
                    M: string;
                    T: string;
                    Y: string;
                    d: string;
                    g: string;
                    m: string;
                    s: string;
                    t: string;
                    u: string;
                    y: string;
                };
                twoDigitYearMax: number;
            };
        };
        numberFormat?: {
            currency: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
            decimals: number;
            groupSize: number[];
            pattern: string[];
            percent: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
        };
    }};

    function format(format: string, ...values: any[]): string;

    function fx(selector: string): effects.Element;
    function fx(element: Element): effects.Element;
    function fx(element: JQuery): effects.Element;

    function init(selector: string, ...namespaces: any[]): void;
    function init(element: JQuery, ...namespaces: any[]): void;
    function init(element: Element, ...namespaces: any[]): void;

    function observable(data: any): kendo.data.ObservableObject;
    function observableHierarchy(array: any[]): kendo.data.ObservableArray;

    function render(template: (data: any) => string, data: any[]): string;
    function template(template: string, options?: TemplateOptions): (data: any) => string;

    function guid(): string;

    function widgetInstance(element: JQuery, suite: typeof kendo.ui): kendo.ui.Widget;
    function widgetInstance(element: JQuery, suite: typeof kendo.mobile.ui): kendo.ui.Widget;


    var ns: string;

    var keys: {
        INSERT: number;
        DELETE: number;
        BACKSPACE: number;
        TAB: number;
        ENTER: number;
        ESC: number;
        LEFT: number;
        UP: number;
        RIGHT: number;
        DOWN: number;
        END: number;
        HOME: number;
        SPACEBAR: number;
        PAGEUP: number;
        PAGEDOWN: number;
        F2: number;
        F10: number;
        F12: number;
    };

    var support: {
        touch: boolean;
        pointers: boolean;
        scrollbar(): number;
        hasHW3D: boolean;
        hasNativeScrolling: boolean;
        devicePixelRatio: number;
        placeHolder: boolean;
        zoomLevel: number;
        mobileOS: {
            device: string;
            tablet: any;
            browser: string;
            name: string;
            majorVersion: string;
            minorVersion: string;
            flatVersion: number;
            appMode: boolean;
        };
        browser: {
            msie: boolean;
            webkit: boolean;
            safari: boolean;
            opera: boolean;
            version: string;
        };
    };

    var version: string;

    interface TemplateOptions {
        paramName?: string;
        useWithBlock?: boolean;
    }

    class Class {
        static fn: Class;
        static extend(prototype: Object): Class;
    }

    class Observable extends Class {
        static fn: Observable;
        static extend(prototype: Object): Observable;

        init(...args: any[]): void;
        bind(eventName: string, handler: Function): Observable;
        one(eventName: string, handler: Function): Observable;
        first(eventName: string, handler: Function): Observable;
        trigger(eventName: string, e?: any): boolean;
        unbind(eventName: string, handler?: any): Observable;
    }

    interface ViewOptions {
        tagName?: string;
        wrap?: boolean;
        model?: Object;
        evalTemplate?: boolean;
        init?: (e: ViewEvent) => void;
        show?: (e: ViewEvent) => void;
        hide?: (e: ViewEvent) => void;
    }

    interface ViewEvent {
        sender: View;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class View extends Observable {
        constructor(element: Element, options?: ViewOptions);
        constructor(element: string, options?: ViewOptions);
        element: JQuery;
        content: any;
        tagName: string;
        model: Object;
        init(element: Element, options?: ViewOptions): void;
        init(element: string, options?: ViewOptions): void;
        render(container?: any): JQuery;
        destroy(): void;
    }

    class ViewContainer extends Observable {
       view: View;
    }

    class Layout extends View {
        containers: { [selector: string]: ViewContainer; };
        showIn(selector: string, view: View, transitionClass?: string): void;
    }

    class History extends Observable {
        current: string;
        root: string;
        start(options: Object): void;
        stop(): void;
        change(callback: Function): void;
        navigate(location: string, silent?: boolean): void;
    }

    var history: History;

    interface RouterOptions {
        init?: (e: RouterEvent) => void;
        pushState?: boolean;
        hashBang?: boolean;
        root?: string;
        ignoreCase?: boolean;
        change?(e: RouterChangeEvent): void;
        routeMissing?(e: RouterRouteMissingEvent): void;
        same?(e: RouterEvent): void;
    }

    interface RouterEvent {
        sender: Router;
        url: string;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface RouterChangeEvent extends RouterEvent {
        params: any;
        backButtonPressed: boolean;
    }

    interface RouterRouteMissingEvent extends RouterEvent {
        params: any;
    }

    class Route extends Class {
        route: RegExp;
        callback(url: string): void;
        worksWith(url: string): void;
    }

    class Router extends Observable {
        constructor(options?: RouterOptions);
        routes: Route[];
        init(options?: RouterOptions): void;
        start(): void;
        destroy(): void;
        route(route: string, callback: Function): void;
        navigate(location: string, silent?: boolean): void;
        replace(location: string, silent?: boolean): void;
    }

}

declare namespace kendo.effects {
    function enable(): void;
    function disable(): void;

    interface Element {
        expand(direction: string): effects.Expand;
        expandHorizontal(): effects.Expand;
        expandVertical(): effects.Expand;
        fade(direction: string): effects.Fade;
        fadeIn(): effects.Fade;
        fadeOut(): effects.Fade;
        flip(axis: string, face: JQuery, back: JQuery): effects.Flip;
        flipHorizontal(face: JQuery, back: JQuery): effects.Flip;
        flipVertical(face: JQuery, back: JQuery): effects.Flip;
        pageturn(axis: string, face: JQuery, back: JQuery): effects.PageTurn;
        pageturnHorizontal(face: JQuery, back: JQuery): effects.PageTurn;
        pageturnVertical(face: JQuery, back: JQuery): effects.PageTurn;
        slideIn(direction: string): effects.SlideIn;
        slideInDown(): effects.SlideIn;
        slideInLeft(): effects.SlideIn;
        slideInRight(): effects.SlideIn;
        slideInUp(): effects.SlideIn;
        tile(direction: string, previous: JQuery): effects.Tile;
        tileDown(previous: JQuery): effects.Tile;
        tileLeft(previous: JQuery): effects.Tile;
        tileRight(previous: JQuery): effects.Tile;
        tileUp(previous: JQuery): effects.Tile;
        transfer(target: JQuery): effects.Transfer;
        zoom(direction: string): effects.Zoom;
        zoomIn(): effects.Zoom;
        zoomOut(): effects.Zoom;
    }

    interface Effect {
        play(): JQueryPromise<any>;
        reverse(): JQueryPromise<any>;
        duration(value: number): Effect;
        add(effect: Effect): Effect;
        stop(): Effect;
    }

    interface Expand extends Effect {
        duration(value: number): Expand;
        direction(value: string): Expand;
        stop(): Expand;
        add(effect: Effect): Expand;
    }

    interface Fade extends Effect {
        duration(value: number): Fade;
        direction(value: string): Fade;
        stop(): Fade;
        add(effect: Effect): Fade;
        startValue(value: number): Fade;
        endValue(value: number): Fade;
    }

    interface Flip extends Effect {
        duration(value: number): Flip;
        direction(value: string): Flip;
        stop(): Flip;
        add(effect: Effect): Flip;
    }

    interface PageTurn extends Effect {
        duration(value: number): PageTurn;
        direction(value: string): PageTurn;
        stop(): PageTurn;
        add(effect: Effect): PageTurn;
    }

    interface SlideIn extends Effect {
        duration(value: number): SlideIn;
        direction(value: string): SlideIn;
        stop(): SlideIn;
        add(effect: Effect): SlideIn;
    }

    interface Tile extends Effect {
        duration(value: number): Tile;
        direction(value: string): Tile;
        stop(): Tile;
        add(effect: Effect): Tile;
    }

    interface Transfer extends Effect {
        duration(value: number): Transfer;
        stop(): Transfer;
        add(effect: Effect): Transfer;
    }

    interface Zoom extends Effect {
        duration(value: number): Zoom;
        direction(value: string): Zoom;
        stop(): Zoom;
        add(effect: Effect): Zoom;
        startValue(value: number): Zoom;
        endValue(value: number): Zoom;
    }
}

declare namespace kendo.data {
    interface ObservableObjectEvent {
        sender?: ObservableObject;
        field?: string;
    }

    interface ObservableObjectSetEvent extends ObservableObjectEvent {
        value?: any;
        preventDefault?: Function;
    }


    class Binding extends Observable {
        source: any;
        parents: any[];
        path: string;
        observable: boolean;
        dependencies: { [path: string]: boolean; };
        constructor(parents: any[], path: string);
        change(e: Object): void;
        start(source: kendo.Observable): void;
        stop(source: kendo.Observable): void;
        get (): any;
        set (value: any): void;
        destroy(): void;
    }

    class BindingTarget {
        target: any;
        options: any;
        source: any;
    }

    class EventBinding extends Binding {
        get (): void;
    }

    class TemplateBinding extends Binding {
        constructor(source: kendo.Observable, path: string, template: Function);
        render(value: Object): string;
    }

    namespace binders { }

    interface Bindings {
        [key: string]: Binding;
    }

    class Binder extends Class {
        static fn: Binder;
        element: any;
        bindings: Bindings;
        options: BinderOptions;
        constructor(element: any, bindings: Bindings, options?: BinderOptions);
        static extend(prototype: Object): Binder;
        init(element: any, bindings: Bindings, options?: BinderOptions): void;
        bind(binding: Binding, attribute: string): void;
        destroy(): void;
        refresh(): void;
        refresh(attribute: string): void;
    }

    interface BinderOptions {
    }

    class ObservableObject extends Observable{
        constructor(value?: any);
        uid: string;
        init(value?: any): void;
        get(name: string): any;
        parent(): ObservableObject;
        set(name: string, value: any): void;
        toJSON(): Object;
    }

    class Model extends ObservableObject {
        static idField: string;
        static fields: DataSourceSchemaModelFields;

        idField: string;
        _defaultId: any;
        fields: DataSourceSchemaModelFields;
        defaults: {
            [field: string]: any;
        };
        id: any;
        dirty: boolean;

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof Model;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof Model;

        constructor(data?: any);
        init(data?: any): void;
        accept(data?: any): void;
        editable(field: string): boolean;
        isNew(): boolean;
    }

    interface SchedulerEventData {
        description?: string;
        end?: Date;
        endTimezone?: string;
        isAllDay?: boolean;
        id?: any;
        start?: Date;
        startTimezone?: string;
        recurrenceId?: any;
        recurrenceRule?: string;
        recurrenceException?: string;
        title?: string;
    }

    class SchedulerEvent extends Model {
        static idField: string;
        static fields: DataSourceSchemaModelFields;

        constructor(data?: SchedulerEventData);

        description: string;
        end: Date;
        endTimezone: string;
        isAllDay: boolean;
        id: any;
        start: Date;
        startTimezone: string;
        recurrenceId: any;
        recurrenceRule: string;
        recurrenceException: string;
        title: string;

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof SchedulerEvent;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof SchedulerEvent;

        init(data?: SchedulerEventData): void;
        clone(options: any, updateUid: boolean): SchedulerEvent;
        duration(): number;
        expand(start: Date, end: Date, zone: any): SchedulerEvent[];
        update(eventInfo: SchedulerEventData): void;
        isMultiDay(): boolean;
        isException(): boolean;
        isOccurrence(): boolean;
        isRecurring(): boolean;
        isRecurrenceHead(): boolean;
        toOccurrence(options: any): SchedulerEvent;
    }

    class TreeListModel extends Model {
        static idField: string;
        static fields: DataSourceSchemaModelFields;

        id: any;
        parentId: any;

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof TreeListModel;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof TreeListModel;

        constructor(data?: any);
        init(data?: any): void;
        loaded(value: boolean): void;
        loaded(): boolean;
    }

    class TreeListDataSource extends DataSource {
        load(model: kendo.data.TreeListModel): JQueryPromise<any>;
        childNodes(model: kendo.data.TreeListModel): kendo.data.TreeListModel[];
        rootNodes(): kendo.data.TreeListModel[];
        parentNode(model: kendo.data.TreeListModel): kendo.data.TreeListModel;
        level(model: kendo.data.TreeListModel): number;
        level(model: any): number;

        add(model: Object): kendo.data.TreeListModel;
        add(model: kendo.data.TreeListModel): kendo.data.TreeListModel;
        at(index: number): kendo.data.TreeListModel;
        cancelChanges(model?: kendo.data.TreeListModel): void;
        get(id: any): kendo.data.TreeListModel;
        getByUid(uid: string): kendo.data.TreeListModel;
        indexOf(value: kendo.data.TreeListModel): number;
        insert(index: number, model: kendo.data.TreeListModel): kendo.data.TreeListModel;
        insert(index: number, model: Object): kendo.data.TreeListModel;
        remove(model: kendo.data.TreeListModel): void;
    }

    class GanttTask extends Model {
        static idField: string;
        static fields: DataSourceSchemaModelFields;

        id: any;
        parentId: number;
        orderId: number;
        title: string;
        start: Date;
        end: Date;
        percentComplete: number;
        summary: boolean;
        expanded: boolean;

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof GanttTask;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof GanttTask;

        constructor(data?: any);
        init(data?: any): void;
    }

    class GanttDependency extends Model {
        static idField: string;
        static fields: DataSourceSchemaModelFields;

        id: any;
        predecessorId: number;
        successorId: number;
        type: number;

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof GanttDependency;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof GanttDependency;

        constructor(data?: any);
        init(data?: any): void;
    }

    class Node extends Model {
        children: HierarchicalDataSource;

        append(model: any): void;
        level(): number;
        load(id: any): void;
        loaded(value: boolean): void;
        loaded(): boolean;
        parentNode(): Node;
    }

    class SchedulerDataSource extends DataSource {
        add(model: Object): kendo.data.SchedulerEvent;
        add(model: kendo.data.SchedulerEvent): kendo.data.SchedulerEvent;
        at(index: number): kendo.data.SchedulerEvent;
        cancelChanges(model?: kendo.data.SchedulerEvent): void;
        get(id: any): kendo.data.SchedulerEvent;
        getByUid(uid: string): kendo.data.SchedulerEvent;
        indexOf(value: kendo.data.SchedulerEvent): number;
        insert(index: number, model: kendo.data.SchedulerEvent): kendo.data.SchedulerEvent;
        insert(index: number, model: Object): kendo.data.SchedulerEvent;
        remove(model: kendo.data.SchedulerEvent): void;
    }

    class GanttDataSource extends DataSource {
        add(model: Object): kendo.data.GanttTask;
        add(model: kendo.data.GanttTask): kendo.data.GanttTask;
        at(index: number): kendo.data.GanttTask;
        cancelChanges(model?: kendo.data.GanttTask): void;
        get(id: any): kendo.data.GanttTask;
        getByUid(uid: string): kendo.data.GanttTask;
        indexOf(value: kendo.data.GanttTask): number;
        insert(index: number, model: Object): kendo.data.GanttTask;
        insert(index: number, model: kendo.data.GanttTask): kendo.data.GanttTask;
        remove(model: kendo.data.GanttTask): void;
    }

    class GanttDependencyDataSource extends DataSource {
        add(model: Object): kendo.data.GanttDependency;
        add(model: kendo.data.GanttDependency): kendo.data.GanttDependency;
        at(index: number): kendo.data.GanttDependency;
        cancelChanges(model?: kendo.data.GanttDependency): void;
        get(id: any): kendo.data.GanttDependency;
        getByUid(uid: string): kendo.data.GanttDependency;
        indexOf(value: kendo.data.GanttDependency): number;
        insert(index: number, model: Object): kendo.data.GanttDependency;
        insert(index: number, model: kendo.data.GanttDependency): kendo.data.GanttDependency;
        remove(model: kendo.data.GanttDependency): void;
    }

    class HierarchicalDataSource extends DataSource {
        constructor(options?: HierarchicalDataSourceOptions);
        init(options?: HierarchicalDataSourceOptions): void;
    }

    interface HierarchicalDataSourceOptions extends DataSourceOptions {
        schema?: HierarchicalDataSourceSchema;
    }


    interface HierarchicalDataSourceSchema extends DataSourceSchemaWithOptionsModel {
        model?: HierarchicalDataSourceSchemaModel;
    }

    interface HierarchicalDataSourceSchemaModel extends DataSourceSchemaModel {
        hasChildren?: any;
        children?: any;
    }

    interface PivotDiscoverRequestRestrictionOptions {
        catalogName: string;
        cubeName: string;
    }

    interface PivotDiscoverRequestDataOptions {
        command: string;
        restrictions: PivotDiscoverRequestRestrictionOptions;
    }

    interface PivotDiscoverRequestOptions {
        data: PivotDiscoverRequestDataOptions;
    }

    interface PivotTransportConnection {
        catalog?: string;
        cube?: string;
    }

    interface PivotTransportDiscover {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface PivotTransport {
        discover?: any;
        read?: any;
    }

    interface PivotTransportWithObjectOperations extends PivotTransport {
        connection: PivotTransportConnection;
        discover?: PivotTransportDiscover;
        read?: DataSourceTransportRead;
    }

    interface PivotTransportWithFunctionOperations extends PivotTransport {
        discover?: (options: DataSourceTransportOptions) => void;
        read?: (options: DataSourceTransportOptions) => void;
    }

    interface PivotDataSourceAxisOptions {
        name: string;
        expand?: boolean;
    }

    interface PivotDataSourceMeasureOptions {
        values: string[];
        axis?: string;
    }

    interface PivotDataSourceOptions extends DataSourceOptions {
        columns?: PivotDataSourceAxisOptions[];
        measures?: PivotDataSourceMeasureOptions[];
        rows?: PivotDataSourceAxisOptions[];
        transport?: PivotTransport;
        schema?: PivotSchema;
    }

    interface PivotTupleModel {
        children: PivotTupleModel[];
        caption?: string;
        name: string;
        levelName?: string;
        levelNum: number;
        hasChildren?: boolean;
        hierarchy?: string;
    }

    interface PivotSchemaRowAxis {
        tuples: PivotTupleModel[];
    }

    interface PivotSchemaColumnAxis {
        tuples: PivotTupleModel[];
    }

    interface PivotSchemaAxes {
        rows: PivotSchemaRowAxis;
        columns: PivotSchemaColumnAxis;
    }

    interface PivotSchema extends DataSourceSchema{
        axes?: any;
        catalogs?: any;
        cubes?: any;
        cube?: any;
        data?: any;
        dimensions?: any;
        hierarchies?: any;
        levels?: any;
        measures?: any;
    }

    class PivotDataSource extends DataSource {
        axes(): PivotSchemaAxes;
        constructor(options?: PivotDataSourceOptions);
        init(options?: PivotDataSourceOptions): void;
        catalog(val: string): void;
        columns(val: string[]): string[];
        cube(val: string): void;
        discover(options: PivotDiscoverRequestOptions): JQueryPromise<any>;
        measures(val: string[]): string[];
        measuresAxis(): string;
        rows(val: string[]): string[];
        schemaCatalogs(): JQueryPromise<any>;
        schemaCubes(): JQueryPromise<any>;
        schemaDimensions(): JQueryPromise<any>;
        schemaHierarchies(): JQueryPromise<any>;
        schemaLevels(): JQueryPromise<any>;
        schemaMeasures(): JQueryPromise<any>;
    }

    interface DataSourceTransport {
        create?: DataSourceTransportCreate;
        destroy?: DataSourceTransportDestroy;
        push?: Function;
        read?: DataSourceTransportRead;
        signalr?: DataSourceTransportSignalr;
        update?: DataSourceTransportUpdate;

        parameterMap?(data: DataSourceTransportParameterMapData, type: string): any;
    }

    interface DataSourceTransportSignalrClient {
        create?: string;
        destroy?: string;
        read?: string;
        update?: string;
    }

    interface DataSourceTransportSignalrServer {
        create?: string;
        destroy?: string;
        read?: string;
        update?: string;
    }

    interface DataSourceTransportSignalr {
        client?: DataSourceTransportSignalrClient;
        hub?: any;
        promise?: any;
        server?: DataSourceTransportSignalrServer;
    }


    interface DataSourceParameterMapDataAggregate {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceParameterMapDataGroup {
        aggregate?: DataSourceParameterMapDataAggregate[];
        field?: string;
        dir?: string;
    }

    interface DataSourceParameterMapDataFilter {
        field?: string;
        filters?: DataSourceParameterMapDataFilter[];
        logic?: string;
        operator?: string;
        value?: any;
    }

    interface DataSourceParameterMapDataSort {
        field?: string;
        dir?: string;
    }

    interface DataSourceTransportParameterMapData {
        aggregate?: DataSourceParameterMapDataAggregate[];
        group?: DataSourceParameterMapDataGroup[];
        filter?: DataSourceParameterMapDataFilter;
        models?: Model[];
        page?: number;
        pageSize?: number;
        skip?: number;
        sort?: DataSourceParameterMapDataSort[];
        take?: number;
    }

    interface DataSourceSchema {
        model?: any;
    }

    interface DataSourceSchemaWithOptionsModel extends DataSourceSchema {
        model?: DataSourceSchemaModel;
    }

    interface DataSourceSchemaWithConstructorModel extends DataSourceSchema {
        model?:  typeof Model;
    }

    interface DataSourceSchemaModel {
        id?: string;
        fields?: any;
        [index: string]: any;
    }

    interface DataSourceSchemaModelWithFieldsArray extends DataSourceSchemaModel {
        fields?: DataSourceSchemaModelField[];
    }

    interface DataSourceSchemaModelWithFieldsObject extends DataSourceSchemaModel {
        fields?: DataSourceSchemaModelFields;
    }

    interface DataSourceSchemaModelFields {
        [index: string]: DataSourceSchemaModelField;
    }

    interface DataSourceSchemaModelField {
        field?: string;
        from?: string;
        defaultValue?: any;
        editable?: boolean;
        nullable?: boolean;
        parse?: Function;
        type?: string;
        validation?: DataSourceSchemaModelFieldValidation;
    }

    interface DataSourceSchemaModelFieldValidation {
        required?: boolean;
        min?: any;
        max?: any;
    }

    class ObservableArray extends Observable {
        length: number;
        [index: number]: any;

        constructor(array: any[]);
        init(array: any[]): void;
        empty(): void;
        every(callback: (item: Object, index: number, source: ObservableArray) => boolean): boolean;
        filter(callback: (item: Object, index: number, source: ObservableArray) => boolean): any[];
        find(callback: (item: Object, index: number, source: ObservableArray) => boolean): any;
        forEach(callback: (item: Object, index: number, source: ObservableArray) => void ): void;
        indexOf(item: any): number;
        join(separator: string): string;
        map(callback: (item: Object, index: number, source: ObservableArray) => any): any[];
        parent(): ObservableObject;
        pop(): ObservableObject;
        push(...items: any[]): number;
        remove(item: Object): void;
        shift(): any;
        slice(begin: number, end?: number): any[];
        some(callback: (item: Object, index: number, source: ObservableArray) => boolean): boolean;
        splice(start: number): any[];
        splice(start: number, deleteCount: number, ...items: any[]): any[];
        toJSON(): any[];
        unshift(...items: any[]): number;
        wrap(object: Object, parent: Object): any;
        wrapAll(source: Object, target: Object): any;
    }

    interface ObservableArrayEvent {
        field?: string;
        action?: string;
        index?: number;
        items?: kendo.data.Model[];
    }

    class DataSource extends Observable{
        options: DataSourceOptions;

        static create(options?: DataSourceOptions): DataSource;

        constructor(options?: DataSourceOptions);
        init(options?: DataSourceOptions): void;
        add(model: Object): kendo.data.Model;
        add(model: kendo.data.Model): kendo.data.Model;
        aggregate(val: any): void;
        aggregate(): any;
        aggregates(): any;
        at(index: number): kendo.data.ObservableObject;
        cancelChanges(model?: kendo.data.Model): void;
        data(): kendo.data.ObservableArray;
        data(value: any): void;
        fetch(callback?: Function): JQueryPromise<any>;
        filter(filters: DataSourceFilterItem): void;
        filter(filters: DataSourceFilterItem[]): void;
        filter(filters: DataSourceFilters): void;
        filter(): DataSourceFilters;
        get(id: any): kendo.data.Model;
        getByUid(uid: string): kendo.data.Model;
        group(groups: any): void;
        group(): any;
        hasChanges(): boolean;
        indexOf(value: kendo.data.ObservableObject): number;
        insert(index: number, model: kendo.data.Model): kendo.data.Model;
        insert(index: number, model: Object): kendo.data.Model;
        online(value: boolean): void;
        online(): boolean;
        offlineData(data: any[]): void;
        offlineData(): any[];
        page(): number;
        page(page: number): void;
        pageSize(): number;
        pageSize(size: number): void;
        pushCreate(model: Object): void;
        pushCreate(models: any[]): void;
        pushDestroy(model: Object): void;
        pushDestroy(models: any[]): void;
        pushUpdate(model: Object): void;
        pushUpdate(models: any[]): void;
        query(options?: any): JQueryPromise<any>;
        read(data?: any): JQueryPromise<any>;
        remove(model: kendo.data.ObservableObject): void;
        sort(sort: DataSourceSortItem): void;
        sort(sort: DataSourceSortItem[]): void;
        sort(): DataSourceSortItem[];
        sync(): JQueryPromise<any>;
        total(): number;
        totalPages(): number;
        view(): kendo.data.ObservableArray;
    }

    class Query {
        data: any[];

        static process(data: any[], options: DataSourceTransportReadOptionsData): QueryResult;

        constructor(data: any[]);
        toArray(): any[];
        range(intex: number, count: number): kendo.data.Query;
        skip(count: number): kendo.data.Query;
        take(count: number): kendo.data.Query;
        select(selector: Function): kendo.data.Query;
        order(selector: string, dir?: string): kendo.data.Query;
        order(selector: Function, dir?: string): kendo.data.Query;
        filter(filters: DataSourceFilterItem): kendo.data.Query;
        filter(filters: DataSourceFilterItem[]): kendo.data.Query;
        filter(filters: DataSourceFilters): kendo.data.Query;
        group(descriptors: DataSourceGroupItem): kendo.data.Query;
        group(descriptors: DataSourceGroupItem[]): kendo.data.Query;
    }

    interface QueryResult {
        total?: number;
        data?: any[];
    }

    interface DataSourceAggregateItem {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceFilter {
    }

    interface DataSourceFilterItem extends DataSourceFilter {
        operator?: string|Function;
        field?: string;
        value?: any;
    }

    interface DataSourceFilters extends DataSourceFilter {
        logic?: string;
        filters?: DataSourceFilter[];
    }

    interface DataSourceGroupItemAggregate {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceGroupItem {
        field?: string;
        dir?: string;
        aggregates?: DataSourceGroupItemAggregate[];
    }

    interface DataSourceSchema {
        aggregates?: any;
        data?: any;
        errors?: any;
        groups?: any;
        parse?: Function;
        total?: any;
        type?: string;
    }

    interface DataSourceSortItem {
        field?: string;
        dir?: string;
    }

    interface DataSourceTransportCreate extends JQueryAjaxSettings {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportDestroy extends JQueryAjaxSettings {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportRead extends JQueryAjaxSettings {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportUpdate extends JQueryAjaxSettings {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportWithObjectOperations extends DataSourceTransport {
        create?: DataSourceTransportCreate;
        destroy?: DataSourceTransportDestroy;
        read?: DataSourceTransportRead;
        update?: DataSourceTransportUpdate;
    }

    interface DataSourceTransportWithFunctionOperations extends DataSourceTransport {
        create?: (options: DataSourceTransportOptions) => void;
        destroy?: (options: DataSourceTransportOptions) => void;
        read?: (options: DataSourceTransportReadOptions) => void;
        update?: (options: DataSourceTransportOptions) => void;
    }

    interface DataSourceTransportOptions {
        success: (data?: any) => void;
        error: (error?: any) => void;
        data: any;
    }

    interface DataSourceTransportReadOptionsData {
        sort?: DataSourceSortItem[];
        filter?: DataSourceFilters;
        group?: DataSourceGroupItem[];
        take?: number;
        skip?: number;
    }

    interface DataSourceTransportReadOptions extends DataSourceTransportOptions {
        data: DataSourceTransportReadOptionsData;
    }

    interface DataSourceTransportBatchOptionsData {
        models: any[];
    }

    interface DataSourceTransportBatchOptions extends DataSourceTransportOptions {
        data: DataSourceTransportBatchOptionsData;
    }

    interface DataSourceOptions {
        aggregate?: DataSourceAggregateItem[];
        autoSync?: boolean;
        batch?: boolean;
        data?: any;
        filter?: any;
        group?: DataSourceGroupItem[];
        offlineStorage?: any;
        page?: number;
        pageSize?: number;
        schema?: DataSourceSchema;
        serverAggregates?: boolean;
        serverFiltering?: boolean;
        serverGrouping?: boolean;
        serverPaging?: boolean;
        serverSorting?: boolean;
        sort?: any;
        transport?: DataSourceTransport;
        type?: string;
        change? (e: DataSourceChangeEvent): void;
        error?(e: DataSourceErrorEvent): void;
		push?(e: DataSourcePushEvent): void;
        sync?(e: DataSourceEvent): void;
        requestStart?(e: DataSourceRequestStartEvent): void;
        requestEnd?(e: DataSourceRequestEndEvent): void;
    }

    interface DataSourceEvent {
        sender?: DataSource;
    }

    interface DataSourceItemOrGroup {
    }

    interface DataSourceGroup extends DataSourceItemOrGroup {
        aggregates: any[];
        field: string;
        hasSubgroups: boolean;
        items: DataSourceItemOrGroup[];
        value: any;
    }

    interface DataSourceChangeEvent extends DataSourceEvent {
        field?: string;
        value?: Model;
        action?: string;
        index?: number;
        items?: DataSourceItemOrGroup[];
        node?: any;
    }

	interface DataSourcePushEvent extends DataSourceEvent {
        items?: DataSourceItemOrGroup[];
		type?: string;
       
    }

    interface DataSourceErrorEvent extends DataSourceEvent {
        xhr: JQueryXHR;
        status: string;
        errorThrown: any;
        errors?: any;
    }

    interface DataSourceRequestStartEvent extends DataSourceEvent {
        type?: string;
    }

    interface DataSourceRequestEndEvent extends DataSourceEvent {
        response?: any;
        type?: string;
    }
}

declare namespace kendo.data.transports {
    var odata: DataSourceTransport;
}

declare namespace kendo.ui {
    function progress(container: JQuery, toggle: boolean): void;

    class Widget extends Observable {
        static fn: any;

        element: JQuery;
        options: any;
        events: string[];

        static extend(prototype: Object): Widget;

        constructor(element: Element, options?: Object);
        constructor(element: JQuery, options?: Object);
        constructor(selector: String, options?: Object);
        init(element: Element, options?: Object): void;
        init(element: JQuery, options?: Object): void;
        init(selector: String, options?: Object): void;
        destroy(): void;
        setOptions(options: Object): void;
        resize(force?: boolean): void;
    }

    function plugin(widget: typeof kendo.ui.Widget, register?: typeof kendo.ui, prefix?: String): void;
    function plugin(widget: any, register?: typeof kendo.ui, prefix?: String): void;
    function plugin(widget: typeof kendo.ui.Widget, register?: typeof kendo.mobile.ui, prefix?: String): void;
    function plugin(widget: any, register?: typeof kendo.mobile.ui, prefix?: String): void;

    class Draggable extends kendo.ui.Widget{
        element: JQuery;
        currentTarget: JQuery;
        constructor(element: Element, options?: DraggableOptions);
        options: DraggableOptions;
    }

    interface DraggableEvent {
        sender?: Draggable;
    }

    class DropTarget extends kendo.ui.Widget{
        element: JQuery;
        constructor(element: Element, options?: DropTargetOptions);
        options: DropTargetOptions;
        static destroyGroup(groupName: string): void;
    }

    interface DropTargetOptions {
        group?: string;
        dragenter?(e: DropTargetDragenterEvent): void;
        dragleave?(e: DropTargetDragleaveEvent): void;
        drop?(e: DropTargetDropEvent): void;
    }

    interface DropTargetEvent {
        sender?: DropTarget;
    }

    interface DropTargetDragenterEvent extends DropTargetEvent {
        draggable?: kendo.ui.Draggable;
    }

    interface DropTargetDragleaveEvent extends DropTargetEvent {
        draggable?: kendo.ui.Draggable;
    }

    interface DropTargetDropEvent extends DropTargetEvent {
        draggable?: kendo.ui.Draggable;
    }

    class DropTargetArea extends kendo.ui.Widget{
        element: JQuery;
        constructor(element: Element, options?: DropTargetAreaOptions);
        options: DropTargetAreaOptions;
    }

    interface DropTargetAreaOptions {
        group?: string;
        filter?: string;
        dragenter?(e: DropTargetAreaDragenterEvent): void;
        dragleave?(e: DropTargetAreaDragleaveEvent): void;
        drop?(e: DropTargetAreaDropEvent): void;
    }

    interface DropTargetAreaEvent {
        sender: DropTargetArea;
    }

    interface DropTargetAreaDragenterEvent extends DropTargetAreaEvent {
        draggable?: kendo.ui.Draggable;
        dropTarget?: JQuery;
        target?: Element;
    }

    interface DropTargetAreaDragleaveEvent extends DropTargetAreaEvent {
        draggable?: kendo.ui.Draggable;
        dropTarget?: JQuery;
        target?: Element;
    }

    interface DropTargetAreaDropEvent extends DropTargetAreaEvent {
        draggable?: kendo.ui.Draggable;
        dropTarget?: JQuery;
        target?: Element;
    }

    interface DraggableOptions {
        axis?: string;
        autoScroll?: boolean;
        container?: JQuery;
        cursorOffset?: any;
        distance?: number;
        filter?: string;
        group?: string;
        hint?: Function|JQuery;
        holdToDrag?: boolean;
        ignore?: string;
        drag?(e: DraggableEvent): void;
        dragcancel?(e: DraggableEvent): void;
        dragend?(e: DraggableEvent): void;
        dragstart?(e: DraggableEvent): void;
        hold?(e: DraggableEvent): void;
    }

    interface GridColumnEditorOptions {
        field?: string;
        format?: string;
        model?: kendo.data.Model;
        values?: any[];
    }

    interface GridColumn {
        editor?(container: JQuery, options: GridColumnEditorOptions): void;
    }

    interface TreeListEditorOptions {
        field?: string;
        format?: string;
        model?: kendo.data.Model;
        values?: any[];
    }

    interface TreeListColumn {
        editor?(container: JQuery, options: TreeListEditorOptions): void;
    }
}

declare namespace kendo.mobile {
    function init(selector: string): void;
    function init(element: JQuery): void;
    function init(element: Element): void;

    class Application extends Observable {
        options: ApplicationOptions;
        router: kendo.Router;
        pane: kendo.mobile.ui.Pane;

        constructor(element?: any, options?: ApplicationOptions);
        init(element?: any, options?: ApplicationOptions): void;
        hideLoading(): void;
        navigate(url: string, transition?: string): void;
        replace(url: string, transition?: string): void;
        scroller(): kendo.mobile.ui.Scroller;
        showLoading(): void;
        view(): kendo.mobile.ui.View;
    }

    interface ApplicationOptions {
        browserHistory?: boolean;
        hideAddressBar?: boolean;
        updateDocumentTitle?: boolean;
        initial?: string;
        layout?: string;
        loading?: string;
        modelScope?: Object;
        platform?: string;
        retina?: boolean;
        serverNavigation?: boolean;
        skin?: string;
        statusBarStyle?: string;
        transition?: string;
        useNativeScrolling?: boolean;
		init?(e: ApplicationEvent): void;
    }

    interface ApplicationEvent {
        sender: Application;
    }
}

declare namespace kendo.mobile.ui {

    class Widget extends kendo.ui.Widget {
    }

    interface TouchAxis {
        location?: number;
        startLocation?: number;
        client?: number;
        delta?: number;
        velocity?: number;
    }

    interface TouchEventOptions {
        target?: JQuery;
        x?: TouchAxis;
        y?: TouchAxis;
    }

    interface Point {
        x?: number;
        y?: number;
    }
}
declare namespace kendo.geometry {
    class Arc extends Observable {


        options: ArcOptions;

        anticlockwise: boolean;
        center: kendo.geometry.Point;
        endAngle: number;
        radiusX: number;
        radiusY: number;
        startAngle: number;

        constructor(center: any|kendo.geometry.Point, options?: ArcOptions);


        bbox(matrix: kendo.geometry.Matrix): kendo.geometry.Rect;
        getAnticlockwise(): boolean;
        getCenter(): kendo.geometry.Point;
        getEndAngle(): number;
        getRadiusX(): number;
        getRadiusY(): number;
        getStartAngle(): number;
        pointAt(angle: number): kendo.geometry.Point;
        setAnticlockwise(value: boolean): kendo.geometry.Arc;
        setCenter(value: kendo.geometry.Point): kendo.geometry.Arc;
        setEndAngle(value: number): kendo.geometry.Arc;
        setRadiusX(value: number): kendo.geometry.Arc;
        setRadiusY(value: number): kendo.geometry.Arc;
        setStartAngle(value: number): kendo.geometry.Arc;

    }

    interface ArcOptions {
        name?: string;
    }
    interface ArcEvent {
        sender: Arc;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Circle extends Observable {


        options: CircleOptions;

        center: kendo.geometry.Point;
        radius: number;

        constructor(center: any|kendo.geometry.Point, radius: number);


        bbox(matrix: kendo.geometry.Matrix): kendo.geometry.Rect;
        clone(): kendo.geometry.Circle;
        equals(other: kendo.geometry.Circle): boolean;
        getCenter(): kendo.geometry.Point;
        getRadius(): number;
        pointAt(angle: number): kendo.geometry.Point;
        setCenter(value: kendo.geometry.Point): kendo.geometry.Point;
        setCenter(value: any): kendo.geometry.Point;
        setRadius(value: number): kendo.geometry.Circle;

    }

    interface CircleOptions {
        name?: string;
    }
    interface CircleEvent {
        sender: Circle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Matrix extends Observable {


        options: MatrixOptions;

        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;


        static rotate(angle: number, x: number, y: number): kendo.geometry.Matrix;
        static scale(scaleX: number, scaleY: number): kendo.geometry.Matrix;
        static translate(x: number, y: number): kendo.geometry.Matrix;
        static unit(): kendo.geometry.Matrix;

        clone(): kendo.geometry.Matrix;
        equals(other: kendo.geometry.Matrix): boolean;
        round(digits: number): kendo.geometry.Matrix;
        multiplyCopy(matrix: kendo.geometry.Matrix): kendo.geometry.Matrix;
        toArray(digits: number): any;
        toString(digits: number, separator: string): string;

    }

    interface MatrixOptions {
        name?: string;
    }
    interface MatrixEvent {
        sender: Matrix;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Point extends Observable {


        options: PointOptions;

        x: number;
        y: number;

        constructor(x: number, y: number);

        static create(x: number, y: number): kendo.geometry.Point;
        static create(x: any, y: number): kendo.geometry.Point;
        static create(x: kendo.geometry.Point, y: number): kendo.geometry.Point;
        static min(): kendo.geometry.Point;
        static max(): kendo.geometry.Point;
        static minPoint(): kendo.geometry.Point;
        static maxPoint(): kendo.geometry.Point;

        clone(): kendo.geometry.Point;
        distanceTo(point: kendo.geometry.Point): number;
        equals(other: kendo.geometry.Point): boolean;
        getX(): number;
        getY(): number;
        move(x: number, y: number): kendo.geometry.Point;
        rotate(angle: number, center: kendo.geometry.Point): kendo.geometry.Point;
        rotate(angle: number, center: any): kendo.geometry.Point;
        round(digits: number): kendo.geometry.Point;
        scale(scaleX: number, scaleY: number): kendo.geometry.Point;
        scaleCopy(scaleX: number, scaleY: number): kendo.geometry.Point;
        setX(value: number): kendo.geometry.Point;
        setY(value: number): kendo.geometry.Point;
        toArray(digits: number): any;
        toString(digits: number, separator: string): string;
        transform(tansformation: kendo.geometry.Transformation): kendo.geometry.Point;
        transformCopy(tansformation: kendo.geometry.Transformation): kendo.geometry.Point;
        translate(dx: number, dy: number): kendo.geometry.Point;
        translateWith(vector: kendo.geometry.Point): kendo.geometry.Point;
        translateWith(vector: any): kendo.geometry.Point;

    }

    interface PointOptions {
        name?: string;
    }
    interface PointEvent {
        sender: Point;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Rect extends Observable {


        options: RectOptions;

        origin: kendo.geometry.Point;
        size: kendo.geometry.Size;

        constructor(origin: kendo.geometry.Point|any, size: kendo.geometry.Size|any);

        static fromPoints(pointA: kendo.geometry.Point, pointB: kendo.geometry.Point): kendo.geometry.Rect;
        static union(rectA: kendo.geometry.Rect, rectB: kendo.geometry.Rect): kendo.geometry.Rect;

        bbox(matrix: kendo.geometry.Matrix): kendo.geometry.Rect;
        bottomLeft(): kendo.geometry.Point;
        bottomRight(): kendo.geometry.Point;
        center(): kendo.geometry.Point;
        clone(): kendo.geometry.Rect;
        equals(other: kendo.geometry.Rect): boolean;
        getOrigin(): kendo.geometry.Point;
        getSize(): kendo.geometry.Size;
        height(): number;
        setOrigin(value: kendo.geometry.Point): kendo.geometry.Rect;
        setOrigin(value: any): kendo.geometry.Rect;
        setSize(value: kendo.geometry.Size): kendo.geometry.Rect;
        setSize(value: any): kendo.geometry.Rect;
        topLeft(): kendo.geometry.Point;
        topRight(): kendo.geometry.Point;
        width(): number;

    }

    interface RectOptions {
        name?: string;
    }
    interface RectEvent {
        sender: Rect;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Size extends Observable {


        options: SizeOptions;

        width: number;
        height: number;


        static create(width: number, height: number): kendo.geometry.Size;
        static create(width: any, height: number): kendo.geometry.Size;
        static create(width: kendo.geometry.Size, height: number): kendo.geometry.Size;

        clone(): kendo.geometry.Size;
        equals(other: kendo.geometry.Size): boolean;
        getWidth(): number;
        getHeight(): number;
        setWidth(value: number): kendo.geometry.Size;
        setHeight(value: number): kendo.geometry.Size;

    }

    interface SizeOptions {
        name?: string;
    }
    interface SizeEvent {
        sender: Size;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Transformation extends Observable {


        options: TransformationOptions;




        clone(): kendo.geometry.Transformation;
        equals(other: kendo.geometry.Transformation): boolean;
        matrix(): kendo.geometry.Matrix;
        multiply(transformation: kendo.geometry.Transformation): kendo.geometry.Transformation;
        rotate(angle: number, center: any): kendo.geometry.Transformation;
        rotate(angle: number, center: kendo.geometry.Point): kendo.geometry.Transformation;
        scale(scaleX: number, scaleY: number): kendo.geometry.Transformation;
        translate(x: number, y: number): kendo.geometry.Transformation;

    }

    interface TransformationOptions {
        name?: string;
    }
    interface TransformationEvent {
        sender: Transformation;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


}
declare namespace kendo.drawing {
    class Arc extends kendo.drawing.Element {


        options: ArcOptions;


        constructor(geometry: kendo.geometry.Arc, options?: ArcOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        geometry(): kendo.geometry.Arc;
        geometry(value: kendo.geometry.Arc): void;
        fill(color: string, opacity?: number): kendo.drawing.Arc;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Arc;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface ArcOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface ArcEvent {
        sender: Arc;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Circle extends kendo.drawing.Element {


        options: CircleOptions;


        constructor(geometry: kendo.geometry.Circle, options?: CircleOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        geometry(): kendo.geometry.Circle;
        geometry(value: kendo.geometry.Circle): void;
        fill(color: string, opacity?: number): kendo.drawing.Circle;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Circle;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface CircleOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface CircleEvent {
        sender: Circle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Element extends kendo.Class {


        options: ElementOptions;

        parent: kendo.drawing.Group;

        constructor(options?: ElementOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        opacity(): number;
        opacity(opacity: number): void;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface ElementOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        opacity?: number;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface ElementEvent {
        sender: Element;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface FillOptions  {



        color?: string;
        opacity?: number;




    }



    class Gradient extends kendo.Class {


        options: GradientOptions;

        stops: any;

        constructor(options?: GradientOptions);


        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        removeStop(stop: kendo.drawing.GradientStop): void;

    }

    interface GradientOptions {
        name?: string;
        stops?: any;
    }
    interface GradientEvent {
        sender: Gradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class GradientStop extends kendo.Class {


        options: GradientStopOptions;


        constructor(options?: GradientStopOptions);



    }

    interface GradientStopOptions {
        name?: string;
        offset?: number;
        color?: string;
        opacity?: number;
    }
    interface GradientStopEvent {
        sender: GradientStop;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Group extends kendo.drawing.Element {


        options: GroupOptions;

        children: any;

        constructor(options?: GroupOptions);


        append(element: kendo.drawing.Element): void;
        clear(): void;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        insert(position: number, element: kendo.drawing.Element): void;
        opacity(): number;
        opacity(opacity: number): void;
        remove(element: kendo.drawing.Element): void;
        removeAt(index: number): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface GroupOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        opacity?: number;
        pdf?: kendo.drawing.PDFOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface GroupEvent {
        sender: Group;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Image extends kendo.drawing.Element {


        options: ImageOptions;


        constructor(src: string, rect: kendo.geometry.Rect);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        opacity(): number;
        opacity(opacity: number): void;
        src(): string;
        src(value: string): void;
        rect(): kendo.geometry.Rect;
        rect(value: kendo.geometry.Rect): void;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface ImageOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        opacity?: number;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface ImageEvent {
        sender: Image;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Layout extends kendo.drawing.Group {


        options: LayoutOptions;


        constructor(rect: kendo.geometry.Rect, options?: LayoutOptions);


        rect(): kendo.geometry.Rect;
        rect(rect: kendo.geometry.Rect): void;
        reflow(): void;

    }

    interface LayoutOptions {
        name?: string;
        alignContent?: string;
        alignItems?: string;
        justifyContent?: string;
        lineSpacing?: number;
        spacing?: number;
        orientation?: string;
        wrap?: boolean;
    }
    interface LayoutEvent {
        sender: Layout;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class LinearGradient extends kendo.drawing.Gradient {


        options: LinearGradientOptions;

        stops: any;

        constructor(options?: LinearGradientOptions);


        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        end(): kendo.geometry.Point;
        end(end: any): void;
        end(end: kendo.geometry.Point): void;
        start(): kendo.geometry.Point;
        start(start: any): void;
        start(start: kendo.geometry.Point): void;
        removeStop(stop: kendo.drawing.GradientStop): void;

    }

    interface LinearGradientOptions {
        name?: string;
        stops?: any;
    }
    interface LinearGradientEvent {
        sender: LinearGradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class MultiPath extends kendo.drawing.Element {


        options: MultiPathOptions;

        paths: any;

        constructor(options?: MultiPathOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        close(): kendo.drawing.MultiPath;
        containsPoint(point: kendo.geometry.Point): boolean;
        curveTo(controlOut: any, controlIn: any, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        fill(color: string, opacity?: number): kendo.drawing.MultiPath;
        lineTo(x: number, y?: number): kendo.drawing.MultiPath;
        lineTo(x: any, y?: number): kendo.drawing.MultiPath;
        lineTo(x: kendo.geometry.Point, y?: number): kendo.drawing.MultiPath;
        moveTo(x: number, y?: number): kendo.drawing.MultiPath;
        moveTo(x: any, y?: number): kendo.drawing.MultiPath;
        moveTo(x: kendo.geometry.Point, y?: number): kendo.drawing.MultiPath;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.MultiPath;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface MultiPathOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface MultiPathEvent {
        sender: MultiPath;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class OptionsStore extends kendo.Class {


        options: OptionsStoreOptions;

        observer: any;

        constructor(options?: OptionsStoreOptions);


        get(field: string): any;
        set(field: string, value: any): void;

    }

    interface OptionsStoreOptions {
        name?: string;
    }
    interface OptionsStoreEvent {
        sender: OptionsStore;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface PDFOptions  {



        creator?: string;
        date?: Date;
        keywords?: string;
        landscape?: boolean;
        margin?: any;
        paperSize?: any;
        subject?: string;
        title?: string;




    }



    class Path extends kendo.drawing.Element {


        options: PathOptions;

        segments: any;

        constructor(options?: PathOptions);

        static fromPoints(points: any): kendo.drawing.Path;
        static fromRect(rect: kendo.geometry.Rect): kendo.drawing.Path;
        static parse(svgPath: string, options?: any): kendo.drawing.Path;

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        close(): kendo.drawing.Path;
        containsPoint(point: kendo.geometry.Point): boolean;
        curveTo(controlOut: any, controlIn: any, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        fill(color: string, opacity?: number): kendo.drawing.Path;
        lineTo(x: number, y?: number): kendo.drawing.Path;
        lineTo(x: any, y?: number): kendo.drawing.Path;
        lineTo(x: kendo.geometry.Point, y?: number): kendo.drawing.Path;
        moveTo(x: number, y?: number): kendo.drawing.Path;
        moveTo(x: any, y?: number): kendo.drawing.Path;
        moveTo(x: kendo.geometry.Point, y?: number): kendo.drawing.Path;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Path;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface PathOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface PathEvent {
        sender: Path;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class RadialGradient extends kendo.drawing.Gradient {


        options: RadialGradientOptions;

        stops: any;

        constructor(options?: RadialGradientOptions);


        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        center(): kendo.geometry.Point;
        center(center: any): void;
        center(center: kendo.geometry.Point): void;
        radius(): number;
        radius(value: number): void;
        removeStop(stop: kendo.drawing.GradientStop): void;

    }

    interface RadialGradientOptions {
        name?: string;
        center?: any|kendo.geometry.Point;
        radius?: number;
        stops?: any;
    }
    interface RadialGradientEvent {
        sender: RadialGradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Rect extends kendo.drawing.Element {


        options: RectOptions;


        constructor(geometry: kendo.geometry.Rect, options?: RectOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        geometry(): kendo.geometry.Rect;
        geometry(value: kendo.geometry.Rect): void;
        fill(color: string, opacity?: number): kendo.drawing.Rect;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Rect;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface RectOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface RectEvent {
        sender: Rect;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Segment extends kendo.Class {


        options: SegmentOptions;


        constructor(anchor: kendo.geometry.Point, controlIn: kendo.geometry.Point, controlOut: kendo.geometry.Point);


        anchor(): kendo.geometry.Point;
        anchor(value: kendo.geometry.Point): void;
        controlIn(): kendo.geometry.Point;
        controlIn(value: kendo.geometry.Point): void;
        controlOut(): kendo.geometry.Point;
        controlOut(value: kendo.geometry.Point): void;

    }

    interface SegmentOptions {
        name?: string;
    }
    interface SegmentEvent {
        sender: Segment;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface StrokeOptions  {



        color?: string;
        dashType?: string;
        lineCap?: string;
        lineJoin?: string;
        opacity?: number;
        width?: number;




    }



    class Surface extends kendo.Observable {


        options: SurfaceOptions;


        constructor(options?: SurfaceOptions);

        static create(element: JQuery, options?: any): kendo.drawing.Surface;
        static create(element: Element, options?: any): kendo.drawing.Surface;

        clear(): void;
        draw(element: kendo.drawing.Element): void;
        eventTarget(e: any): kendo.drawing.Element;
        hideTooltip(): void;
        resize(force?: boolean): void;
        showTooltip(element: kendo.drawing.Element, options?: any): void;

    }

    interface SurfaceTooltipAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface SurfaceTooltipAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface SurfaceTooltipAnimation {
        close?: SurfaceTooltipAnimationClose;
        open?: SurfaceTooltipAnimationOpen;
    }

    interface SurfaceTooltip {
        animation?: boolean|SurfaceTooltipAnimation;
        appendTo?: string|JQuery;
    }

    interface SurfaceOptions {
        name?: string;
        type?: string;
        height?: string;
        width?: string;
        tooltip?: SurfaceTooltip;
        click?(e: SurfaceClickEvent): void;
        mouseenter?(e: SurfaceMouseenterEvent): void;
        mouseleave?(e: SurfaceMouseleaveEvent): void;
        tooltipClose?(e: SurfaceTooltipCloseEvent): void;
        tooltipOpen?(e: SurfaceTooltipOpenEvent): void;
    }
    interface SurfaceEvent {
        sender: Surface;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SurfaceClickEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface SurfaceMouseenterEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface SurfaceMouseleaveEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface SurfaceTooltipCloseEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        target?: kendo.drawing.Element;
    }

    interface SurfaceTooltipOpenEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        target?: kendo.drawing.Element;
    }


    class Text extends kendo.drawing.Element {


        options: TextOptions;


        constructor(content: string, position: kendo.geometry.Point, options?: TextOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        content(): string;
        content(value: string): void;
        fill(color: string, opacity?: number): kendo.drawing.Text;
        opacity(): number;
        opacity(opacity: number): void;
        position(): kendo.geometry.Point;
        position(value: kendo.geometry.Point): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Text;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface TextOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        font?: string;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface TextEvent {
        sender: Text;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface TooltipOptions  {



        autoHide?: boolean;
        content?: string|Function;
        position?: string;
        height?: number|string;
        hideDelay?: number;
        offset?: number;
        shared?: boolean;
        showAfter?: number;
        showOn?: string;
        width?: number|string;




    }



}
declare namespace kendo {
    class Color extends Observable {


        options: ColorOptions;




        diff(): number;
        equals(): boolean;
        toHSV(): any;
        toRGB(): any;
        toBytes(): any;
        toHex(): string;
        toCss(): string;
        toCssRgba(): string;
        toDisplay(): string;

    }

    interface ColorOptions {
        name?: string;
    }
    interface ColorEvent {
        sender: Color;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    namespace date {
        function setDayOfWeek(targetDate: Date, dayOfWeek: number, direction: number): void;
        function dayOfWeek(targetDate: Date, dayOfWeek: number, direction: number): Date;
        function getDate(date: Date): Date;
        function isInDateRange(targetDate: Date, lowerLimitDate: Date, upperLimitDate: Date): boolean;
        function isInTimeRange(targetDate: Date, lowerLimitDate: Date, upperLimitDate: Date): boolean;
        function isToday(targetDate: Date): boolean;
        function nextDay(targetDate: Date): Date;
        function previousDay(targetDate: Date): Date;
        function toUtcTime(targetDate: Date): number;
        function setTime(targetDate: Date, millisecondsToAdd: number, ignoreDST: boolean): void;
        function setHours(targetDate: Date, sourceDate: number): Date;
        function addDays(targetDate: Date): Date;
        function today(): Date;
        function toInvariantTime(targetDate: Date): Date;
        function firstDayOfMonth(targetDate: Date): Date;
        function lastDayOfMonth(targetDate: Date): Date;
        function getMilliseconds(targetDate: Date): Date;
    }

    namespace drawing {
        function align(elements: any, rect: kendo.geometry.Rect, alignment: string): void;
        function drawDOM(element: JQuery, options: any): JQueryPromise<any>;
        function exportImage(group: kendo.drawing.Group, options: any): JQueryPromise<any>;
        function exportPDF(group: kendo.drawing.Group, options: kendo.drawing.PDFOptions): JQueryPromise<any>;
        function exportSVG(group: kendo.drawing.Group, options: any): JQueryPromise<any>;
        function fit(element: kendo.drawing.Element, rect: kendo.geometry.Rect): void;
        function stack(elements: any): void;
        function vAlign(elements: any, rect: kendo.geometry.Rect, alignment: string): void;
        function vStack(elements: any): void;
        function vWrap(elements: any, rect: kendo.geometry.Rect): any;
        function wrap(elements: any, rect: kendo.geometry.Rect): any;
    }

    namespace effects {
        function box(element: HTMLElement): any;
        function fillScale(firstElement: HTMLElement, secondElement: HTMLElement): number;
        function fitScale(firstElement: HTMLElement, secondElement: HTMLElement): number;
        function transformOrigin(firstElement: HTMLElement, secondElement: HTMLElement): any;
    }

        function alert(text: string): void;
        function antiForgeryTokens(): any;
        function bind(element: string, viewModel: any, namespace?: any): void;
        function bind(element: string, viewModel: kendo.data.ObservableObject, namespace?: any): void;
        function bind(element: JQuery, viewModel: any, namespace?: any): void;
        function bind(element: JQuery, viewModel: kendo.data.ObservableObject, namespace?: any): void;
        function bind(element: Element, viewModel: any, namespace?: any): void;
        function bind(element: Element, viewModel: kendo.data.ObservableObject, namespace?: any): void;
        function observableHierarchy(array: any): void;
        function confirm(text: string): JQueryPromise<any>;
        function culture(culture: string): void;
        function destroy(element: string): void;
        function destroy(element: JQuery): void;
        function destroy(element: Element): void;
        function htmlEncode(value: string): string;
        function parseDate(value: string, formats?: string, culture?: string): Date;
        function parseDate(value: string, formats?: any, culture?: string): Date;
        function parseFloat(value: string, culture?: string): number;
        function parseInt(value: string, culture?: string): number;
        function parseColor(color: string, noerror: boolean): kendo.Color;
        function prompt(text: string, defaultValue: string): JQueryPromise<any>;
        function proxyModelSetters(): void;
        function proxyModelSetters(data: kendo.data.Model): void;
        function resize(element: string, force: boolean): void;
        function resize(element: JQuery, force: boolean): void;
        function resize(element: Element, force: boolean): void;
        function saveAs(options: any): void;
        function stringify(value: any): string;
        function throttle(fn: Function, timeout: number): Function;
        function touchScroller(element: string): void;
        function touchScroller(element: JQuery): void;
        function touchScroller(element: Element): void;
        function toString(value: Date, format: string, culture?: string): string;
        function toString(value: number, format: string, culture?: string): string;
        function unbind(element: string): void;
        function unbind(element: JQuery): void;
        function unbind(element: Element): void;

    namespace pdf {
        function defineFont(map: any): void;
    }

    namespace timezone {
        function offset(utcTime: Date, timezone: string): number;
        function offset(utcTime: number, timezone: string): number;
        function convert(targetDate: Date, fromOffset: number, toOffset: number): Date;
        function convert(targetDate: Date, fromOffset: number, toOffset: string): Date;
        function convert(targetDate: Date, fromOffset: string, toOffset: number): Date;
        function convert(targetDate: Date, fromOffset: string, toOffset: string): Date;
        function apply(targetDate: Date, offset: number): Date;
        function apply(targetDate: Date, offset: string): Date;
        function remove(targetDate: Date, offset: number): Date;
        function remove(targetDate: Date, offset: string): Date;
        function abbr(targetDate: Date, timezone: string): string;
        function toLocalDate(targetDate: Date): Date;
        function toLocalDate(targetDate: number): Date;
    }

}
declare namespace kendo.mobile.ui {
    class ActionSheet extends kendo.mobile.ui.Widget {

        static fn: ActionSheet;

        options: ActionSheetOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ActionSheet;

        constructor(element: Element, options?: ActionSheetOptions);


        close(): void;
        destroy(): void;
        open(target: JQuery, context: any): void;

    }

    interface ActionSheetPopup {
        direction?: number|string;
        height?: number|string;
        width?: number|string;
    }

    interface ActionSheetOptions {
        name?: string;
        cancel?: string;
        popup?: ActionSheetPopup;
        type?: string;
        close?(e: ActionSheetEvent): void;
        open?(e: ActionSheetOpenEvent): void;
    }
    interface ActionSheetEvent {
        sender: ActionSheet;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ActionSheetOpenEvent extends ActionSheetEvent {
        target?: JQuery;
        context?: JQuery;
    }


    class BackButton extends kendo.mobile.ui.Widget {

        static fn: BackButton;

        options: BackButtonOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): BackButton;

        constructor(element: Element, options?: BackButtonOptions);


        destroy(): void;

    }

    interface BackButtonOptions {
        name?: string;
        click?(e: BackButtonClickEvent): void;
    }
    interface BackButtonEvent {
        sender: BackButton;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface BackButtonClickEvent extends BackButtonEvent {
        target?: JQuery;
        button?: JQuery;
    }


    class Button extends kendo.mobile.ui.Widget {

        static fn: Button;

        options: ButtonOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Button;

        constructor(element: Element, options?: ButtonOptions);


        badge(value: string): string;
        badge(value: boolean): string;
        destroy(): void;
        enable(enable: boolean): void;

    }

    interface ButtonOptions {
        name?: string;
        badge?: string;
        clickOn?: string;
        enable?: boolean;
        icon?: string;
        click?(e: ButtonClickEvent): void;
    }
    interface ButtonEvent {
        sender: Button;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ButtonClickEvent extends ButtonEvent {
        target?: JQuery;
        button?: JQuery;
    }


    class ButtonGroup extends kendo.mobile.ui.Widget {

        static fn: ButtonGroup;

        options: ButtonGroupOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ButtonGroup;

        constructor(element: Element, options?: ButtonGroupOptions);


        badge(button: string, value: string): string;
        badge(button: string, value: boolean): string;
        badge(button: number, value: string): string;
        badge(button: number, value: boolean): string;
        current(): JQuery;
        destroy(): void;
        enable(enable: boolean): void;
        select(li: JQuery): void;
        select(li: number): void;

    }

    interface ButtonGroupOptions {
        name?: string;
        enable?: boolean;
        index?: number;
        selectOn?: string;
        select?(e: ButtonGroupSelectEvent): void;
    }
    interface ButtonGroupEvent {
        sender: ButtonGroup;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ButtonGroupSelectEvent extends ButtonGroupEvent {
        index?: number;
    }


    class Collapsible extends kendo.mobile.ui.Widget {

        static fn: Collapsible;

        options: CollapsibleOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Collapsible;

        constructor(element: Element, options?: CollapsibleOptions);


        collapse(instant: boolean): void;
        destroy(): void;
        expand(instant?: boolean): void;
        resize(): void;
        toggle(instant?: boolean): void;

    }

    interface CollapsibleOptions {
        name?: string;
        animation?: boolean;
        collapsed?: boolean;
        expandIcon?: string;
        iconPosition?: string;
        inset?: boolean;
        collapse?(e: CollapsibleEvent): void;
        expand?(e: CollapsibleEvent): void;
    }
    interface CollapsibleEvent {
        sender: Collapsible;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class DetailButton extends kendo.mobile.ui.Widget {

        static fn: DetailButton;

        options: DetailButtonOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DetailButton;

        constructor(element: Element, options?: DetailButtonOptions);


        destroy(): void;

    }

    interface DetailButtonOptions {
        name?: string;
        click?(e: DetailButtonClickEvent): void;
    }
    interface DetailButtonEvent {
        sender: DetailButton;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DetailButtonClickEvent extends DetailButtonEvent {
        target?: JQuery;
        button?: JQuery;
    }


    class Drawer extends kendo.mobile.ui.Widget {

        static fn: Drawer;

        options: DrawerOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Drawer;

        constructor(element: Element, options?: DrawerOptions);


        destroy(): void;
        hide(): void;
        show(): void;

    }

    interface DrawerOptions {
        name?: string;
        container?: JQuery;
        position?: string;
        swipeToOpen?: boolean;
        swipeToOpenViews?: any;
        title?: string;
        views?: any;
        afterHide?(e: DrawerAfterHideEvent): void;
        beforeShow?(e: DrawerEvent): void;
        hide?(e: DrawerHideEvent): void;
        init?(e: DrawerInitEvent): void;
        show?(e: DrawerShowEvent): void;
    }
    interface DrawerEvent {
        sender: Drawer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DrawerAfterHideEvent extends DrawerEvent {
    }

    interface DrawerHideEvent extends DrawerEvent {
    }

    interface DrawerInitEvent extends DrawerEvent {
    }

    interface DrawerShowEvent extends DrawerEvent {
    }


    class Layout extends kendo.mobile.ui.Widget {

        static fn: Layout;

        options: LayoutOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Layout;

        constructor(element: Element, options?: LayoutOptions);



    }

    interface LayoutOptions {
        name?: string;
        id?: string;
        platform?: string;
        hide?(e: LayoutHideEvent): void;
        init?(e: LayoutInitEvent): void;
        show?(e: LayoutShowEvent): void;
    }
    interface LayoutEvent {
        sender: Layout;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface LayoutHideEvent extends LayoutEvent {
        layout?: JQuery;
        view?: JQuery;
    }

    interface LayoutInitEvent extends LayoutEvent {
        layout?: JQuery;
    }

    interface LayoutShowEvent extends LayoutEvent {
        layout?: JQuery;
        view?: JQuery;
    }


    class ListView extends kendo.mobile.ui.Widget {

        static fn: ListView;

        options: ListViewOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ListView;

        constructor(element: Element, options?: ListViewOptions);


        append(dataItems: any): void;
        prepend(dataItems: any): void;
        replace(dataItems: any): void;
        remove(dataItems: any): void;
        setDataItem(item: JQuery, dataItem: kendo.data.Model): void;
        destroy(): void;
        items(): JQuery;
        refresh(): void;
        setDataSource(dataSource: kendo.data.DataSource): void;

    }

    interface ListViewFilterable {
        placeholder?: string;
        autoFilter?: boolean;
        field?: string;
        ignoreCase?: boolean;
        operator?: string;
    }

    interface ListViewMessages {
        loadMoreText?: string;
        pullTemplate?: string;
        refreshTemplate?: string;
        releaseTemplate?: string;
    }

    interface ListViewOptions {
        name?: string;
        appendOnRefresh?: boolean;
        autoBind?: boolean;
        dataSource?: kendo.data.DataSource|any;
        endlessScroll?: boolean;
        fixedHeaders?: boolean;
        headerTemplate?: string|Function;
        loadMore?: boolean;
        messages?: ListViewMessages;
        pullToRefresh?: boolean;
        pullParameters?: Function;
        style?: string;
        template?: string|Function;
        type?: string;
        filterable?: boolean|ListViewFilterable;
        virtualViewSize?: number;
        click?(e: ListViewClickEvent): void;
        dataBound?(e: ListViewEvent): void;
        dataBinding?(e: ListViewEvent): void;
        itemChange?(e: ListViewEvent): void;
    }
    interface ListViewEvent {
        sender: ListView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ListViewClickEvent extends ListViewEvent {
        item?: JQuery;
        target?: JQuery;
        dataItem?: any;
        button?: kendo.mobile.ui.Button;
    }


    class Loader extends kendo.mobile.ui.Widget {

        static fn: Loader;

        options: LoaderOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Loader;

        constructor(element: Element, options?: LoaderOptions);


        hide(): void;
        show(): void;

    }

    interface LoaderOptions {
        name?: string;
    }
    interface LoaderEvent {
        sender: Loader;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class ModalView extends kendo.mobile.ui.Widget {

        static fn: ModalView;

        options: ModalViewOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ModalView;

        constructor(element: Element, options?: ModalViewOptions);


        close(): void;
        destroy(): void;
        open(target?: JQuery): void;

    }

    interface ModalViewOptions {
        name?: string;
        height?: number;
        modal?: boolean;
        width?: number;
        beforeOpen?(e: ModalViewBeforeOpenEvent): void;
        close?(e: ModalViewCloseEvent): void;
        init?(e: ModalViewInitEvent): void;
        open?(e: ModalViewOpenEvent): void;
    }
    interface ModalViewEvent {
        sender: ModalView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ModalViewBeforeOpenEvent extends ModalViewEvent {
        target?: JQuery;
    }

    interface ModalViewCloseEvent extends ModalViewEvent {
    }

    interface ModalViewInitEvent extends ModalViewEvent {
    }

    interface ModalViewOpenEvent extends ModalViewEvent {
        target?: JQuery;
    }


    class NavBar extends kendo.mobile.ui.Widget {

        static fn: NavBar;

        options: NavBarOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): NavBar;

        constructor(element: Element, options?: NavBarOptions);


        destroy(): void;
        title(value: string): void;

    }

    interface NavBarOptions {
        name?: string;
    }
    interface NavBarEvent {
        sender: NavBar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Pane extends kendo.mobile.ui.Widget {

        static fn: Pane;

        options: PaneOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Pane;

        constructor(element: Element, options?: PaneOptions);


        destroy(): void;
        hideLoading(): void;
        navigate(url: string, transition: string): void;
        replace(url: string, transition: string): void;
        showLoading(): void;
        view(): kendo.mobile.ui.View;

    }

    interface PaneOptions {
        name?: string;
        collapsible?: boolean;
        initial?: string;
        layout?: string;
        loading?: string;
        portraitWidth?: number;
        transition?: string;
        navigate?(e: PaneNavigateEvent): void;
        viewShow?(e: PaneViewShowEvent): void;
    }
    interface PaneEvent {
        sender: Pane;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PaneNavigateEvent extends PaneEvent {
        url?: JQuery;
    }

    interface PaneViewShowEvent extends PaneEvent {
        view?: kendo.mobile.ui.View;
    }


    class PopOver extends kendo.mobile.ui.Widget {

        static fn: PopOver;

        options: PopOverOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PopOver;

        constructor(element: Element, options?: PopOverOptions);


        close(): void;
        destroy(): void;
        open(target: JQuery): void;

    }

    interface PopOverPane {
        initial?: string;
        layout?: string;
        loading?: string;
        transition?: string;
    }

    interface PopOverPopup {
        height?: number|string;
        width?: number|string;
    }

    interface PopOverOptions {
        name?: string;
        pane?: PopOverPane;
        popup?: PopOverPopup;
        close?(e: PopOverCloseEvent): void;
        open?(e: PopOverOpenEvent): void;
    }
    interface PopOverEvent {
        sender: PopOver;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PopOverCloseEvent extends PopOverEvent {
    }

    interface PopOverOpenEvent extends PopOverEvent {
        target?: JQuery;
    }


    class ScrollView extends kendo.mobile.ui.Widget {

        static fn: ScrollView;

        options: ScrollViewOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ScrollView;

        constructor(element: Element, options?: ScrollViewOptions);


        content(content: string): void;
        content(content: JQuery): void;
        destroy(): void;
        next(): void;
        prev(): void;
        refresh(): void;
        scrollTo(page: number, instant: boolean): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        value(dataItem: any): any;

    }

    interface ScrollViewOptions {
        name?: string;
        autoBind?: boolean;
        bounceVelocityThreshold?: number;
        contentHeight?: number|string;
        dataSource?: kendo.data.DataSource|any;
        duration?: number;
        emptyTemplate?: string;
        enablePager?: boolean;
        itemsPerPage?: number;
        page?: number;
        pageSize?: number;
        template?: string;
        velocityThreshold?: number;
        changing?(e: ScrollViewChangingEvent): void;
        change?(e: ScrollViewChangeEvent): void;
        refresh?(e: ScrollViewRefreshEvent): void;
    }
    interface ScrollViewEvent {
        sender: ScrollView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ScrollViewChangingEvent extends ScrollViewEvent {
        currentPage?: number;
        nextPage?: number;
    }

    interface ScrollViewChangeEvent extends ScrollViewEvent {
        page?: number;
        element?: JQuery;
        data?: any;
    }

    interface ScrollViewRefreshEvent extends ScrollViewEvent {
        pageCount?: number;
        page?: number;
    }


    class Scroller extends kendo.mobile.ui.Widget {

        static fn: Scroller;

        options: ScrollerOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Scroller;

        constructor(element: Element, options?: ScrollerOptions);


        animatedScrollTo(x: number, y: number): void;
        contentResized(): void;
        destroy(): void;
        disable(): void;
        enable(): void;
        height(): number;
        pullHandled(): void;
        reset(): void;
        scrollHeight(): void;
        scrollTo(x: number, y: number): void;
        scrollWidth(): void;
        zoomOut(): void;

    }

    interface ScrollerMessages {
        pullTemplate?: string;
        refreshTemplate?: string;
        releaseTemplate?: string;
    }

    interface ScrollerOptions {
        name?: string;
        elastic?: boolean;
        messages?: ScrollerMessages;
        pullOffset?: number;
        pullToRefresh?: boolean;
        useNative?: boolean;
        visibleScrollHints?: boolean;
        zoom?: boolean;
        pull?(e: ScrollerEvent): void;
        resize?(e: ScrollerEvent): void;
        scroll?(e: ScrollerScrollEvent): void;
    }
    interface ScrollerEvent {
        sender: Scroller;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ScrollerScrollEvent extends ScrollerEvent {
        scrollTop?: number;
        scrollLeft?: number;
    }


    class SplitView extends kendo.mobile.ui.Widget {

        static fn: SplitView;

        options: SplitViewOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): SplitView;

        constructor(element: Element, options?: SplitViewOptions);


        destroy(): void;
        expandPanes(): void;
        collapsePanes(): void;

    }

    interface SplitViewOptions {
        name?: string;
        style?: string;
        init?(e: SplitViewInitEvent): void;
        show?(e: SplitViewShowEvent): void;
    }
    interface SplitViewEvent {
        sender: SplitView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SplitViewInitEvent extends SplitViewEvent {
        view?: JQuery;
    }

    interface SplitViewShowEvent extends SplitViewEvent {
        view?: JQuery;
    }


    class Switch extends kendo.mobile.ui.Widget {

        static fn: Switch;

        options: SwitchOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Switch;

        constructor(element: Element, options?: SwitchOptions);


        check(): boolean;
        check(check: boolean): void;
        destroy(): void;
        enable(enable: boolean): void;
        refresh(): void;
        toggle(): void;

    }

    interface SwitchOptions {
        name?: string;
        checked?: boolean;
        enable?: boolean;
        offLabel?: string;
        onLabel?: string;
        change?(e: SwitchChangeEvent): void;
    }
    interface SwitchEvent {
        sender: Switch;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SwitchChangeEvent extends SwitchEvent {
        checked?: any;
    }


    class TabStrip extends kendo.mobile.ui.Widget {

        static fn: TabStrip;

        options: TabStripOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TabStrip;

        constructor(element: Element, options?: TabStripOptions);


        badge(tab: string, value: string): string;
        badge(tab: string, value: boolean): string;
        badge(tab: number, value: string): string;
        badge(tab: number, value: boolean): string;
        currentItem(): JQuery;
        destroy(): void;
        switchTo(url: string): void;
        switchTo(url: number): void;
        switchByFullUrl(url: string): void;
        clear(): void;

    }

    interface TabStripOptions {
        name?: string;
        selectedIndex?: number;
        select?(e: TabStripSelectEvent): void;
    }
    interface TabStripEvent {
        sender: TabStrip;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TabStripSelectEvent extends TabStripEvent {
        item?: JQuery;
    }


    class View extends kendo.mobile.ui.Widget {

        static fn: View;

        options: ViewOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): View;

        constructor(element: Element, options?: ViewOptions);


        contentElement(): void;
        destroy(): void;
        enable(enable: boolean): void;

    }

    interface ViewOptions {
        name?: string;
        model?: string;
        reload?: boolean;
        scroller?: any;
        stretch?: boolean;
        title?: string;
        useNativeScrolling?: boolean;
        zoom?: boolean;
        afterShow?(e: ViewAfterShowEvent): void;
        beforeHide?(e: ViewBeforeHideEvent): void;
        beforeShow?(e: ViewBeforeShowEvent): void;
        hide?(e: ViewHideEvent): void;
        init?(e: ViewInitEvent): void;
        show?(e: ViewShowEvent): void;
        transitionStart?(e: ViewTransitionStartEvent): void;
        transitionEnd?(e: ViewTransitionEndEvent): void;
    }
    interface ViewEvent {
        sender: View;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ViewAfterShowEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewBeforeHideEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewBeforeShowEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewHideEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewInitEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewShowEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewTransitionStartEvent extends ViewEvent {
        type?: string;
    }

    interface ViewTransitionEndEvent extends ViewEvent {
        type?: string;
    }


}
declare namespace kendo.ui {
    class Touch extends kendo.ui.Widget {

        static fn: Touch;

        options: TouchOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Touch;

        constructor(element: Element, options?: TouchOptions);


        cancel(): void;
        destroy(): void;

    }

    interface TouchOptions {
        name?: string;
        filter?: string;
        surface?: JQuery;
        multiTouch?: boolean;
        enableSwipe?: boolean;
        minXDelta?: number;
        maxYDelta?: number;
        maxDuration?: number;
        minHold?: number;
        doubleTapTimeout?: number;
        touchstart?(e: TouchTouchstartEvent): void;
        dragstart?(e: TouchDragstartEvent): void;
        drag?(e: TouchDragEvent): void;
        dragend?(e: TouchDragendEvent): void;
        tap?(e: TouchTapEvent): void;
        doubletap?(e: TouchDoubletapEvent): void;
        hold?(e: TouchHoldEvent): void;
        swipe?(e: TouchSwipeEvent): void;
        gesturestart?(e: TouchGesturestartEvent): void;
        gesturechange?(e: TouchGesturechangeEvent): void;
        gestureend?(e: TouchGestureendEvent): void;
    }
    interface TouchEvent {
        sender: Touch;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TouchTouchstartEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchDragstartEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchDragEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchDragendEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchTapEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchDoubletapEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchHoldEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchSwipeEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchGesturestartEvent extends TouchEvent {
        touches?: any;
        event?: JQueryEventObject;
        distance?: number;
        center?: kendo.mobile.ui.Point;
    }

    interface TouchGesturechangeEvent extends TouchEvent {
        touches?: any;
        event?: JQueryEventObject;
        distance?: number;
        center?: kendo.mobile.ui.Point;
    }

    interface TouchGestureendEvent extends TouchEvent {
        touches?: any;
        event?: JQueryEventObject;
        distance?: number;
        center?: kendo.mobile.ui.Point;
    }


}
declare namespace kendo.ooxml {
    class Workbook extends Observable {


        options: WorkbookOptions;

        sheets: WorkbookSheet[];

        constructor(options?: WorkbookOptions);


        toDataURL(): string;

    }

    interface WorkbookSheetColumn {
        autoWidth?: boolean;
        index?: number;
        width?: number;
    }

    interface WorkbookSheetFilter {
        from?: number;
        to?: number;
    }

    interface WorkbookSheetFreezePane {
        colSplit?: number;
        rowSplit?: number;
    }

    interface WorkbookSheetRowCellBorderBottom {
        color?: string;
        size?: number;
    }

    interface WorkbookSheetRowCellBorderLeft {
        color?: string;
        size?: number;
    }

    interface WorkbookSheetRowCellBorderRight {
        color?: string;
        size?: number;
    }

    interface WorkbookSheetRowCellBorderTop {
        color?: string;
        size?: number;
    }

    interface WorkbookSheetRowCell {
        background?: string;
        borderBottom?: WorkbookSheetRowCellBorderBottom;
        borderLeft?: WorkbookSheetRowCellBorderLeft;
        borderTop?: WorkbookSheetRowCellBorderTop;
        borderRight?: WorkbookSheetRowCellBorderRight;
        bold?: boolean;
        color?: string;
        colSpan?: number;
        fontFamily?: string;
        fontName?: string;
        fontSize?: number;
        format?: string;
        formula?: string;
        hAlign?: string;
        index?: any;
        italic?: boolean;
        rowSpan?: number;
        textAlign?: string;
        underline?: boolean;
        wrap?: boolean;
        vAlign?: string;
        verticalAlign?: string;
        value?: Date|number|string|boolean;
    }

    interface WorkbookSheetRow {
        cells?: WorkbookSheetRowCell[];
        index?: number;
        height?: number;
    }

    interface WorkbookSheet {
        columns?: WorkbookSheetColumn[];
        freezePane?: WorkbookSheetFreezePane;
        frozenColumns?: number;
        frozenRows?: number;
        filter?: WorkbookSheetFilter;
        name?: string;
        rows?: WorkbookSheetRow[];
        showGridLines?: boolean;
        title?: string;
    }

    interface WorkbookOptions {
        name?: string;
        creator?: string;
        date?: Date;
        sheets?: WorkbookSheet[];
    }
    interface WorkbookEvent {
        sender: Workbook;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


}

declare namespace kendo.dataviz.geometry {
    class Arc extends Observable {


        options: ArcOptions;

        anticlockwise: boolean;
        center: kendo.geometry.Point;
        endAngle: number;
        radiusX: number;
        radiusY: number;
        startAngle: number;

        constructor(center: any|kendo.geometry.Point, options?: ArcOptions);


        bbox(matrix: kendo.geometry.Matrix): kendo.geometry.Rect;
        getAnticlockwise(): boolean;
        getCenter(): kendo.geometry.Point;
        getEndAngle(): number;
        getRadiusX(): number;
        getRadiusY(): number;
        getStartAngle(): number;
        pointAt(angle: number): kendo.geometry.Point;
        setAnticlockwise(value: boolean): kendo.geometry.Arc;
        setCenter(value: kendo.geometry.Point): kendo.geometry.Arc;
        setEndAngle(value: number): kendo.geometry.Arc;
        setRadiusX(value: number): kendo.geometry.Arc;
        setRadiusY(value: number): kendo.geometry.Arc;
        setStartAngle(value: number): kendo.geometry.Arc;

    }

    interface ArcOptions {
        name?: string;
    }
    interface ArcEvent {
        sender: Arc;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Circle extends Observable {


        options: CircleOptions;

        center: kendo.geometry.Point;
        radius: number;

        constructor(center: any|kendo.geometry.Point, radius: number);


        bbox(matrix: kendo.geometry.Matrix): kendo.geometry.Rect;
        clone(): kendo.geometry.Circle;
        equals(other: kendo.geometry.Circle): boolean;
        getCenter(): kendo.geometry.Point;
        getRadius(): number;
        pointAt(angle: number): kendo.geometry.Point;
        setCenter(value: kendo.geometry.Point): kendo.geometry.Point;
        setCenter(value: any): kendo.geometry.Point;
        setRadius(value: number): kendo.geometry.Circle;

    }

    interface CircleOptions {
        name?: string;
    }
    interface CircleEvent {
        sender: Circle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Matrix extends Observable {


        options: MatrixOptions;

        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;


        static rotate(angle: number, x: number, y: number): kendo.geometry.Matrix;
        static scale(scaleX: number, scaleY: number): kendo.geometry.Matrix;
        static translate(x: number, y: number): kendo.geometry.Matrix;
        static unit(): kendo.geometry.Matrix;

        clone(): kendo.geometry.Matrix;
        equals(other: kendo.geometry.Matrix): boolean;
        round(digits: number): kendo.geometry.Matrix;
        multiplyCopy(matrix: kendo.geometry.Matrix): kendo.geometry.Matrix;
        toArray(digits: number): any;
        toString(digits: number, separator: string): string;

    }

    interface MatrixOptions {
        name?: string;
    }
    interface MatrixEvent {
        sender: Matrix;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Point extends Observable {


        options: PointOptions;

        x: number;
        y: number;

        constructor(x: number, y: number);

        static create(x: number, y: number): kendo.geometry.Point;
        static create(x: any, y: number): kendo.geometry.Point;
        static create(x: kendo.geometry.Point, y: number): kendo.geometry.Point;
        static min(): kendo.geometry.Point;
        static max(): kendo.geometry.Point;
        static minPoint(): kendo.geometry.Point;
        static maxPoint(): kendo.geometry.Point;

        clone(): kendo.geometry.Point;
        distanceTo(point: kendo.geometry.Point): number;
        equals(other: kendo.geometry.Point): boolean;
        getX(): number;
        getY(): number;
        move(x: number, y: number): kendo.geometry.Point;
        rotate(angle: number, center: kendo.geometry.Point): kendo.geometry.Point;
        rotate(angle: number, center: any): kendo.geometry.Point;
        round(digits: number): kendo.geometry.Point;
        scale(scaleX: number, scaleY: number): kendo.geometry.Point;
        scaleCopy(scaleX: number, scaleY: number): kendo.geometry.Point;
        setX(value: number): kendo.geometry.Point;
        setY(value: number): kendo.geometry.Point;
        toArray(digits: number): any;
        toString(digits: number, separator: string): string;
        transform(tansformation: kendo.geometry.Transformation): kendo.geometry.Point;
        transformCopy(tansformation: kendo.geometry.Transformation): kendo.geometry.Point;
        translate(dx: number, dy: number): kendo.geometry.Point;
        translateWith(vector: kendo.geometry.Point): kendo.geometry.Point;
        translateWith(vector: any): kendo.geometry.Point;

    }

    interface PointOptions {
        name?: string;
    }
    interface PointEvent {
        sender: Point;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Rect extends Observable {


        options: RectOptions;

        origin: kendo.geometry.Point;
        size: kendo.geometry.Size;

        constructor(origin: kendo.geometry.Point|any, size: kendo.geometry.Size|any);

        static fromPoints(pointA: kendo.geometry.Point, pointB: kendo.geometry.Point): kendo.geometry.Rect;
        static union(rectA: kendo.geometry.Rect, rectB: kendo.geometry.Rect): kendo.geometry.Rect;

        bbox(matrix: kendo.geometry.Matrix): kendo.geometry.Rect;
        bottomLeft(): kendo.geometry.Point;
        bottomRight(): kendo.geometry.Point;
        center(): kendo.geometry.Point;
        clone(): kendo.geometry.Rect;
        equals(other: kendo.geometry.Rect): boolean;
        getOrigin(): kendo.geometry.Point;
        getSize(): kendo.geometry.Size;
        height(): number;
        setOrigin(value: kendo.geometry.Point): kendo.geometry.Rect;
        setOrigin(value: any): kendo.geometry.Rect;
        setSize(value: kendo.geometry.Size): kendo.geometry.Rect;
        setSize(value: any): kendo.geometry.Rect;
        topLeft(): kendo.geometry.Point;
        topRight(): kendo.geometry.Point;
        width(): number;

    }

    interface RectOptions {
        name?: string;
    }
    interface RectEvent {
        sender: Rect;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Size extends Observable {


        options: SizeOptions;

        width: number;
        height: number;


        static create(width: number, height: number): kendo.geometry.Size;
        static create(width: any, height: number): kendo.geometry.Size;
        static create(width: kendo.geometry.Size, height: number): kendo.geometry.Size;

        clone(): kendo.geometry.Size;
        equals(other: kendo.geometry.Size): boolean;
        getWidth(): number;
        getHeight(): number;
        setWidth(value: number): kendo.geometry.Size;
        setHeight(value: number): kendo.geometry.Size;

    }

    interface SizeOptions {
        name?: string;
    }
    interface SizeEvent {
        sender: Size;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Transformation extends Observable {


        options: TransformationOptions;




        clone(): kendo.geometry.Transformation;
        equals(other: kendo.geometry.Transformation): boolean;
        matrix(): kendo.geometry.Matrix;
        multiply(transformation: kendo.geometry.Transformation): kendo.geometry.Transformation;
        rotate(angle: number, center: any): kendo.geometry.Transformation;
        rotate(angle: number, center: kendo.geometry.Point): kendo.geometry.Transformation;
        scale(scaleX: number, scaleY: number): kendo.geometry.Transformation;
        translate(x: number, y: number): kendo.geometry.Transformation;

    }

    interface TransformationOptions {
        name?: string;
    }
    interface TransformationEvent {
        sender: Transformation;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


}
declare namespace kendo.dataviz.drawing {
    class Arc extends kendo.drawing.Element {


        options: ArcOptions;


        constructor(geometry: kendo.geometry.Arc, options?: ArcOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        geometry(): kendo.geometry.Arc;
        geometry(value: kendo.geometry.Arc): void;
        fill(color: string, opacity?: number): kendo.drawing.Arc;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Arc;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface ArcOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface ArcEvent {
        sender: Arc;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Circle extends kendo.drawing.Element {


        options: CircleOptions;


        constructor(geometry: kendo.geometry.Circle, options?: CircleOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        geometry(): kendo.geometry.Circle;
        geometry(value: kendo.geometry.Circle): void;
        fill(color: string, opacity?: number): kendo.drawing.Circle;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Circle;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface CircleOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface CircleEvent {
        sender: Circle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Element extends kendo.Class {


        options: ElementOptions;

        parent: kendo.drawing.Group;

        constructor(options?: ElementOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        opacity(): number;
        opacity(opacity: number): void;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface ElementOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        opacity?: number;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface ElementEvent {
        sender: Element;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface FillOptions  {



        color?: string;
        opacity?: number;




    }



    class Gradient extends kendo.Class {


        options: GradientOptions;

        stops: any;

        constructor(options?: GradientOptions);


        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        removeStop(stop: kendo.drawing.GradientStop): void;

    }

    interface GradientOptions {
        name?: string;
        stops?: any;
    }
    interface GradientEvent {
        sender: Gradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class GradientStop extends kendo.Class {


        options: GradientStopOptions;


        constructor(options?: GradientStopOptions);



    }

    interface GradientStopOptions {
        name?: string;
        offset?: number;
        color?: string;
        opacity?: number;
    }
    interface GradientStopEvent {
        sender: GradientStop;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Group extends kendo.drawing.Element {


        options: GroupOptions;

        children: any;

        constructor(options?: GroupOptions);


        append(element: kendo.drawing.Element): void;
        clear(): void;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        insert(position: number, element: kendo.drawing.Element): void;
        opacity(): number;
        opacity(opacity: number): void;
        remove(element: kendo.drawing.Element): void;
        removeAt(index: number): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface GroupOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        opacity?: number;
        pdf?: kendo.drawing.PDFOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface GroupEvent {
        sender: Group;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Image extends kendo.drawing.Element {


        options: ImageOptions;


        constructor(src: string, rect: kendo.geometry.Rect);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        opacity(): number;
        opacity(opacity: number): void;
        src(): string;
        src(value: string): void;
        rect(): kendo.geometry.Rect;
        rect(value: kendo.geometry.Rect): void;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface ImageOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        opacity?: number;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface ImageEvent {
        sender: Image;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Layout extends kendo.drawing.Group {


        options: LayoutOptions;


        constructor(rect: kendo.geometry.Rect, options?: LayoutOptions);


        rect(): kendo.geometry.Rect;
        rect(rect: kendo.geometry.Rect): void;
        reflow(): void;

    }

    interface LayoutOptions {
        name?: string;
        alignContent?: string;
        alignItems?: string;
        justifyContent?: string;
        lineSpacing?: number;
        spacing?: number;
        orientation?: string;
        wrap?: boolean;
    }
    interface LayoutEvent {
        sender: Layout;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class LinearGradient extends kendo.drawing.Gradient {


        options: LinearGradientOptions;

        stops: any;

        constructor(options?: LinearGradientOptions);


        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        end(): kendo.geometry.Point;
        end(end: any): void;
        end(end: kendo.geometry.Point): void;
        start(): kendo.geometry.Point;
        start(start: any): void;
        start(start: kendo.geometry.Point): void;
        removeStop(stop: kendo.drawing.GradientStop): void;

    }

    interface LinearGradientOptions {
        name?: string;
        stops?: any;
    }
    interface LinearGradientEvent {
        sender: LinearGradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class MultiPath extends kendo.drawing.Element {


        options: MultiPathOptions;

        paths: any;

        constructor(options?: MultiPathOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        close(): kendo.drawing.MultiPath;
        containsPoint(point: kendo.geometry.Point): boolean;
        curveTo(controlOut: any, controlIn: any, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        fill(color: string, opacity?: number): kendo.drawing.MultiPath;
        lineTo(x: number, y?: number): kendo.drawing.MultiPath;
        lineTo(x: any, y?: number): kendo.drawing.MultiPath;
        lineTo(x: kendo.geometry.Point, y?: number): kendo.drawing.MultiPath;
        moveTo(x: number, y?: number): kendo.drawing.MultiPath;
        moveTo(x: any, y?: number): kendo.drawing.MultiPath;
        moveTo(x: kendo.geometry.Point, y?: number): kendo.drawing.MultiPath;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.MultiPath;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface MultiPathOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface MultiPathEvent {
        sender: MultiPath;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class OptionsStore extends kendo.Class {


        options: OptionsStoreOptions;

        observer: any;

        constructor(options?: OptionsStoreOptions);


        get(field: string): any;
        set(field: string, value: any): void;

    }

    interface OptionsStoreOptions {
        name?: string;
    }
    interface OptionsStoreEvent {
        sender: OptionsStore;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface PDFOptions  {



        creator?: string;
        date?: Date;
        keywords?: string;
        landscape?: boolean;
        margin?: any;
        paperSize?: any;
        subject?: string;
        title?: string;




    }



    class Path extends kendo.drawing.Element {


        options: PathOptions;

        segments: any;

        constructor(options?: PathOptions);

        static fromPoints(points: any): kendo.drawing.Path;
        static fromRect(rect: kendo.geometry.Rect): kendo.drawing.Path;
        static parse(svgPath: string, options?: any): kendo.drawing.Path;

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        close(): kendo.drawing.Path;
        containsPoint(point: kendo.geometry.Point): boolean;
        curveTo(controlOut: any, controlIn: any, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        fill(color: string, opacity?: number): kendo.drawing.Path;
        lineTo(x: number, y?: number): kendo.drawing.Path;
        lineTo(x: any, y?: number): kendo.drawing.Path;
        lineTo(x: kendo.geometry.Point, y?: number): kendo.drawing.Path;
        moveTo(x: number, y?: number): kendo.drawing.Path;
        moveTo(x: any, y?: number): kendo.drawing.Path;
        moveTo(x: kendo.geometry.Point, y?: number): kendo.drawing.Path;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Path;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface PathOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface PathEvent {
        sender: Path;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class RadialGradient extends kendo.drawing.Gradient {


        options: RadialGradientOptions;

        stops: any;

        constructor(options?: RadialGradientOptions);


        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        center(): kendo.geometry.Point;
        center(center: any): void;
        center(center: kendo.geometry.Point): void;
        radius(): number;
        radius(value: number): void;
        removeStop(stop: kendo.drawing.GradientStop): void;

    }

    interface RadialGradientOptions {
        name?: string;
        center?: any|kendo.geometry.Point;
        radius?: number;
        stops?: any;
    }
    interface RadialGradientEvent {
        sender: RadialGradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Rect extends kendo.drawing.Element {


        options: RectOptions;


        constructor(geometry: kendo.geometry.Rect, options?: RectOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        geometry(): kendo.geometry.Rect;
        geometry(value: kendo.geometry.Rect): void;
        fill(color: string, opacity?: number): kendo.drawing.Rect;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Rect;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface RectOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface RectEvent {
        sender: Rect;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Segment extends kendo.Class {


        options: SegmentOptions;


        constructor(anchor: kendo.geometry.Point, controlIn: kendo.geometry.Point, controlOut: kendo.geometry.Point);


        anchor(): kendo.geometry.Point;
        anchor(value: kendo.geometry.Point): void;
        controlIn(): kendo.geometry.Point;
        controlIn(value: kendo.geometry.Point): void;
        controlOut(): kendo.geometry.Point;
        controlOut(value: kendo.geometry.Point): void;

    }

    interface SegmentOptions {
        name?: string;
    }
    interface SegmentEvent {
        sender: Segment;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface StrokeOptions  {



        color?: string;
        dashType?: string;
        lineCap?: string;
        lineJoin?: string;
        opacity?: number;
        width?: number;




    }



    class Surface extends kendo.Observable {


        options: SurfaceOptions;


        constructor(options?: SurfaceOptions);

        static create(element: JQuery, options?: any): kendo.drawing.Surface;
        static create(element: Element, options?: any): kendo.drawing.Surface;

        clear(): void;
        draw(element: kendo.drawing.Element): void;
        eventTarget(e: any): kendo.drawing.Element;
        hideTooltip(): void;
        resize(force?: boolean): void;
        showTooltip(element: kendo.drawing.Element, options?: any): void;

    }

    interface SurfaceTooltipAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface SurfaceTooltipAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface SurfaceTooltipAnimation {
        close?: SurfaceTooltipAnimationClose;
        open?: SurfaceTooltipAnimationOpen;
    }

    interface SurfaceTooltip {
        animation?: boolean|SurfaceTooltipAnimation;
        appendTo?: string|JQuery;
    }

    interface SurfaceOptions {
        name?: string;
        type?: string;
        height?: string;
        width?: string;
        tooltip?: SurfaceTooltip;
        click?(e: SurfaceClickEvent): void;
        mouseenter?(e: SurfaceMouseenterEvent): void;
        mouseleave?(e: SurfaceMouseleaveEvent): void;
        tooltipClose?(e: SurfaceTooltipCloseEvent): void;
        tooltipOpen?(e: SurfaceTooltipOpenEvent): void;
    }
    interface SurfaceEvent {
        sender: Surface;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SurfaceClickEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface SurfaceMouseenterEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface SurfaceMouseleaveEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface SurfaceTooltipCloseEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        target?: kendo.drawing.Element;
    }

    interface SurfaceTooltipOpenEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        target?: kendo.drawing.Element;
    }


    class Text extends kendo.drawing.Element {


        options: TextOptions;


        constructor(content: string, position: kendo.geometry.Point, options?: TextOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        content(): string;
        content(value: string): void;
        fill(color: string, opacity?: number): kendo.drawing.Text;
        opacity(): number;
        opacity(opacity: number): void;
        position(): kendo.geometry.Point;
        position(value: kendo.geometry.Point): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Text;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface TextOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        font?: string;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        tooltip?: kendo.drawing.TooltipOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface TextEvent {
        sender: Text;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface TooltipOptions  {



        autoHide?: boolean;
        content?: string|Function;
        position?: string;
        height?: number|string;
        hideDelay?: number;
        offset?: number;
        shared?: boolean;
        showAfter?: number;
        showOn?: string;
        width?: number|string;




    }



}

interface HTMLElement {
    kendoBindingTarget: kendo.data.BindingTarget;
}

interface JQueryAjaxSettings {
}

interface JQueryXHR {
}

interface JQueryEventObject {
}

interface JQueryPromise<T> {
}

interface JQuery {

    kendoDraggable(): JQuery;
    kendoDraggable(options: kendo.ui.DraggableOptions): JQuery;

    kendoDropTarget(): JQuery;
    kendoDropTarget(options: kendo.ui.DropTargetOptions): JQuery;

    kendoDropTargetArea(): JQuery;
    kendoDropTargetArea(options: kendo.ui.DropTargetAreaOptions): JQuery;

    data(key: any): any;

    kendoMobileActionSheet(): JQuery;
    kendoMobileActionSheet(options: kendo.mobile.ui.ActionSheetOptions): JQuery;
    data(key: "kendoMobileActionSheet"): kendo.mobile.ui.ActionSheet;

    kendoMobileBackButton(): JQuery;
    kendoMobileBackButton(options: kendo.mobile.ui.BackButtonOptions): JQuery;
    data(key: "kendoMobileBackButton"): kendo.mobile.ui.BackButton;

    kendoMobileButton(): JQuery;
    kendoMobileButton(options: kendo.mobile.ui.ButtonOptions): JQuery;
    data(key: "kendoMobileButton"): kendo.mobile.ui.Button;

    kendoMobileButtonGroup(): JQuery;
    kendoMobileButtonGroup(options: kendo.mobile.ui.ButtonGroupOptions): JQuery;
    data(key: "kendoMobileButtonGroup"): kendo.mobile.ui.ButtonGroup;

    kendoMobileCollapsible(): JQuery;
    kendoMobileCollapsible(options: kendo.mobile.ui.CollapsibleOptions): JQuery;
    data(key: "kendoMobileCollapsible"): kendo.mobile.ui.Collapsible;

    kendoMobileDetailButton(): JQuery;
    kendoMobileDetailButton(options: kendo.mobile.ui.DetailButtonOptions): JQuery;
    data(key: "kendoMobileDetailButton"): kendo.mobile.ui.DetailButton;

    kendoMobileDrawer(): JQuery;
    kendoMobileDrawer(options: kendo.mobile.ui.DrawerOptions): JQuery;
    data(key: "kendoMobileDrawer"): kendo.mobile.ui.Drawer;

    kendoMobileLayout(): JQuery;
    kendoMobileLayout(options: kendo.mobile.ui.LayoutOptions): JQuery;
    data(key: "kendoMobileLayout"): kendo.mobile.ui.Layout;

    kendoMobileListView(): JQuery;
    kendoMobileListView(options: kendo.mobile.ui.ListViewOptions): JQuery;
    data(key: "kendoMobileListView"): kendo.mobile.ui.ListView;

    kendoMobileLoader(): JQuery;
    kendoMobileLoader(options: kendo.mobile.ui.LoaderOptions): JQuery;
    data(key: "kendoMobileLoader"): kendo.mobile.ui.Loader;

    kendoMobileModalView(): JQuery;
    kendoMobileModalView(options: kendo.mobile.ui.ModalViewOptions): JQuery;
    data(key: "kendoMobileModalView"): kendo.mobile.ui.ModalView;

    kendoMobileNavBar(): JQuery;
    kendoMobileNavBar(options: kendo.mobile.ui.NavBarOptions): JQuery;
    data(key: "kendoMobileNavBar"): kendo.mobile.ui.NavBar;

    kendoMobilePane(): JQuery;
    kendoMobilePane(options: kendo.mobile.ui.PaneOptions): JQuery;
    data(key: "kendoMobilePane"): kendo.mobile.ui.Pane;

    kendoMobilePopOver(): JQuery;
    kendoMobilePopOver(options: kendo.mobile.ui.PopOverOptions): JQuery;
    data(key: "kendoMobilePopOver"): kendo.mobile.ui.PopOver;

    kendoMobileScrollView(): JQuery;
    kendoMobileScrollView(options: kendo.mobile.ui.ScrollViewOptions): JQuery;
    data(key: "kendoMobileScrollView"): kendo.mobile.ui.ScrollView;

    kendoMobileScroller(): JQuery;
    kendoMobileScroller(options: kendo.mobile.ui.ScrollerOptions): JQuery;
    data(key: "kendoMobileScroller"): kendo.mobile.ui.Scroller;

    kendoMobileSplitView(): JQuery;
    kendoMobileSplitView(options: kendo.mobile.ui.SplitViewOptions): JQuery;
    data(key: "kendoMobileSplitView"): kendo.mobile.ui.SplitView;

    kendoMobileSwitch(): JQuery;
    kendoMobileSwitch(options: kendo.mobile.ui.SwitchOptions): JQuery;
    data(key: "kendoMobileSwitch"): kendo.mobile.ui.Switch;

    kendoMobileTabStrip(): JQuery;
    kendoMobileTabStrip(options: kendo.mobile.ui.TabStripOptions): JQuery;
    data(key: "kendoMobileTabStrip"): kendo.mobile.ui.TabStrip;

    kendoMobileView(): JQuery;
    kendoMobileView(options: kendo.mobile.ui.ViewOptions): JQuery;
    data(key: "kendoMobileView"): kendo.mobile.ui.View;

    kendoTouch(): JQuery;
    kendoTouch(options: kendo.ui.TouchOptions): JQuery;
    data(key: "kendoTouch"): kendo.ui.Touch;

}
