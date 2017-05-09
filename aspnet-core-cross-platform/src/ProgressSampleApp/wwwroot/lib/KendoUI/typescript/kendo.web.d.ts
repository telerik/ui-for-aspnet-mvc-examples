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

declare namespace kendo.ui {
    class Alert extends kendo.ui.Dialog {

        static fn: Alert;

        options: AlertOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Alert;

        constructor(element: Element, options?: AlertOptions);



    }

    interface AlertMessages {
        okText?: string;
    }

    interface AlertOptions {
        name?: string;
        messages?: AlertMessages;
    }
    interface AlertEvent {
        sender: Alert;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class AutoComplete extends kendo.ui.Widget {

        static fn: AutoComplete;

        options: AutoCompleteOptions;

        dataSource: kendo.data.DataSource;
        list: JQuery;
        ul: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): AutoComplete;

        constructor(element: Element, options?: AutoCompleteOptions);


        close(): void;
        dataItem(index: number): any;
        destroy(): void;
        enable(enable: boolean): void;
        focus(): void;
        items(): any;
        readonly(readonly: boolean): void;
        refresh(): void;
        search(word: string): void;
        select(item: string): void;
        select(item: Element): void;
        select(item: JQuery): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        suggest(value: string): void;
        value(): string;
        value(value: string): void;

    }

    interface AutoCompleteAnimationClose {
        duration?: number;
        effects?: string;
    }

    interface AutoCompleteAnimationOpen {
        duration?: number;
        effects?: string;
    }

    interface AutoCompleteAnimation {
        close?: AutoCompleteAnimationClose;
        open?: AutoCompleteAnimationOpen;
    }

    interface AutoCompleteVirtual {
        itemHeight?: number;
        mapValueTo?: string;
        valueMapper?: Function;
    }

    interface AutoCompleteOptions {
        name?: string;
        animation?: boolean|AutoCompleteAnimation;
        dataSource?: any|any|kendo.data.DataSource;
        clearButton?: boolean;
        dataTextField?: string;
        delay?: number;
        enable?: boolean;
        enforceMinLength?: boolean;
        filter?: string;
        fixedGroupTemplate?: string|Function;
        footerTemplate?: string|Function;
        groupTemplate?: string|Function;
        height?: number;
        highlightFirst?: boolean;
        ignoreCase?: boolean;
        minLength?: number;
        noDataTemplate?: string|Function;
        placeholder?: string;
        popup?: any;
        separator?: string|any;
        suggest?: boolean;
        headerTemplate?: string|Function;
        template?: string|Function;
        value?: string;
        valuePrimitive?: boolean;
        virtual?: boolean|AutoCompleteVirtual;
        change?(e: AutoCompleteChangeEvent): void;
        close?(e: AutoCompleteCloseEvent): void;
        dataBound?(e: AutoCompleteDataBoundEvent): void;
        filtering?(e: AutoCompleteFilteringEvent): void;
        open?(e: AutoCompleteOpenEvent): void;
        select?(e: AutoCompleteSelectEvent): void;
    }
    interface AutoCompleteEvent {
        sender: AutoComplete;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface AutoCompleteChangeEvent extends AutoCompleteEvent {
    }

    interface AutoCompleteCloseEvent extends AutoCompleteEvent {
    }

    interface AutoCompleteDataBoundEvent extends AutoCompleteEvent {
    }

    interface AutoCompleteFilteringEvent extends AutoCompleteEvent {
        filter?: any;
    }

    interface AutoCompleteOpenEvent extends AutoCompleteEvent {
    }

    interface AutoCompleteSelectEvent extends AutoCompleteEvent {
        dataItem?: any;
        item?: JQuery;
    }


    class Button extends kendo.ui.Widget {

        static fn: Button;

        options: ButtonOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Button;

        constructor(element: Element, options?: ButtonOptions);


        enable(toggle: boolean): void;

    }

    interface ButtonOptions {
        name?: string;
        enable?: boolean;
        icon?: string;
        imageUrl?: string;
        spriteCssClass?: string;
        click?(e: ButtonClickEvent): void;
    }
    interface ButtonEvent {
        sender: Button;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ButtonClickEvent extends ButtonEvent {
        event?: any;
    }


    class Calendar extends kendo.ui.Widget {

        static fn: Calendar;

        options: CalendarOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Calendar;

        constructor(element: Element, options?: CalendarOptions);


        current(): Date;
        destroy(): void;
        max(): Date;
        max(value: Date): void;
        max(value: string): void;
        min(): Date;
        min(value: Date): void;
        min(value: string): void;
        navigate(value: Date, view: string): void;
        navigateDown(value: Date): void;
        navigateToFuture(): void;
        navigateToPast(): void;
        navigateUp(): void;
        value(): Date;
        value(value: Date): void;
        value(value: string): void;
        view(): any;

    }

    interface CalendarMonth {
        content?: string;
        empty?: string;
    }

    interface CalendarOptions {
        name?: string;
        culture?: string;
        dates?: any;
        depth?: string;
        disableDates?: any|Function;
        footer?: string|Function;
        format?: string;
        max?: Date;
        min?: Date;
        month?: CalendarMonth;
        start?: string;
        value?: Date;
        change?(e: CalendarEvent): void;
        navigate?(e: CalendarEvent): void;
    }
    interface CalendarEvent {
        sender: Calendar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class ColorPalette extends kendo.ui.Widget {

        static fn: ColorPalette;

        options: ColorPaletteOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ColorPalette;

        constructor(element: Element, options?: ColorPaletteOptions);


        value(): string;
        value(color?: string): void;
        color(): kendo.Color;
        color(color?: kendo.Color): void;
        enable(enable?: boolean): void;

    }

    interface ColorPaletteTileSize {
        width?: number;
        height?: number;
    }

    interface ColorPaletteOptions {
        name?: string;
        palette?: string|any;
        columns?: number;
        tileSize?: ColorPaletteTileSize;
        value?: string;
        change?(e: ColorPaletteEvent): void;
    }
    interface ColorPaletteEvent {
        sender: ColorPalette;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class ColorPicker extends kendo.ui.Widget {

        static fn: ColorPicker;

        options: ColorPickerOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ColorPicker;

        constructor(element: Element, options?: ColorPickerOptions);


        close(): void;
        open(): void;
        toggle(): void;
        value(): string;
        value(color?: string): void;
        color(): kendo.Color;
        color(color?: kendo.Color): void;
        enable(enable?: boolean): void;

    }

    interface ColorPickerMessages {
        apply?: string;
        cancel?: string;
    }

    interface ColorPickerTileSize {
        width?: number;
        height?: number;
    }

    interface ColorPickerOptions {
        name?: string;
        buttons?: boolean;
        columns?: number;
        tileSize?: ColorPickerTileSize;
        messages?: ColorPickerMessages;
        palette?: string|any;
        opacity?: boolean;
        preview?: boolean;
        toolIcon?: string;
        value?: string;
        change?(e: ColorPickerChangeEvent): void;
        select?(e: ColorPickerSelectEvent): void;
        open?(e: ColorPickerEvent): void;
        close?(e: ColorPickerEvent): void;
    }
    interface ColorPickerEvent {
        sender: ColorPicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ColorPickerChangeEvent extends ColorPickerEvent {
        value?: string;
    }

    interface ColorPickerSelectEvent extends ColorPickerEvent {
        value?: string;
    }


    class ComboBox extends kendo.ui.Widget {

        static fn: ComboBox;

        options: ComboBoxOptions;

        dataSource: kendo.data.DataSource;
        input: JQuery;
        list: JQuery;
        ul: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ComboBox;

        constructor(element: Element, options?: ComboBoxOptions);


        close(): void;
        dataItem(index?: number): any;
        destroy(): void;
        enable(enable: boolean): void;
        focus(): void;
        items(): any;
        open(): void;
        readonly(readonly: boolean): void;
        refresh(): void;
        search(word: string): void;
        select(): number;
        select(li: JQuery): void;
        select(li: number): void;
        select(li: Function): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        suggest(value: string): void;
        text(): string;
        text(text: string): void;
        toggle(toggle: boolean): void;
        value(): string;
        value(value: string): void;

    }

    interface ComboBoxAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface ComboBoxAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface ComboBoxAnimation {
        close?: ComboBoxAnimationClose;
        open?: ComboBoxAnimationOpen;
    }

    interface ComboBoxPopup {
        appendTo?: string;
        origin?: string;
        position?: string;
    }

    interface ComboBoxVirtual {
        itemHeight?: number;
        mapValueTo?: string;
        valueMapper?: Function;
    }

    interface ComboBoxOptions {
        name?: string;
        animation?: ComboBoxAnimation;
        autoBind?: boolean;
        cascadeFrom?: string;
        cascadeFromField?: string;
        clearButton?: boolean;
        dataSource?: any|any|kendo.data.DataSource;
        dataTextField?: string;
        dataValueField?: string;
        delay?: number;
        enable?: boolean;
        enforceMinLength?: boolean;
        filter?: string;
        fixedGroupTemplate?: string|Function;
        footerTemplate?: string|Function;
        groupTemplate?: string|Function;
        height?: number;
        highlightFirst?: boolean;
        ignoreCase?: boolean;
        index?: number;
        minLength?: number;
        noDataTemplate?: string|Function;
        placeholder?: string;
        popup?: ComboBoxPopup;
        suggest?: boolean;
        headerTemplate?: string|Function;
        template?: string|Function;
        text?: string;
        value?: string;
        valuePrimitive?: boolean;
        virtual?: boolean|ComboBoxVirtual;
        change?(e: ComboBoxChangeEvent): void;
        close?(e: ComboBoxCloseEvent): void;
        dataBound?(e: ComboBoxDataBoundEvent): void;
        filtering?(e: ComboBoxFilteringEvent): void;
        open?(e: ComboBoxOpenEvent): void;
        select?(e: ComboBoxSelectEvent): void;
        cascade?(e: ComboBoxCascadeEvent): void;
    }
    interface ComboBoxEvent {
        sender: ComboBox;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ComboBoxChangeEvent extends ComboBoxEvent {
    }

    interface ComboBoxCloseEvent extends ComboBoxEvent {
    }

    interface ComboBoxDataBoundEvent extends ComboBoxEvent {
    }

    interface ComboBoxFilteringEvent extends ComboBoxEvent {
        filter?: any;
    }

    interface ComboBoxOpenEvent extends ComboBoxEvent {
    }

    interface ComboBoxSelectEvent extends ComboBoxEvent {
        dataItem?: any;
        item?: JQuery;
    }

    interface ComboBoxCascadeEvent extends ComboBoxEvent {
    }


    class Confirm extends kendo.ui.Dialog {

        static fn: Confirm;

        options: ConfirmOptions;

        result: JQueryPromise<any>;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Confirm;

        constructor(element: Element, options?: ConfirmOptions);



    }

    interface ConfirmMessages {
        okText?: string;
        cancel?: string;
    }

    interface ConfirmOptions {
        name?: string;
        messages?: ConfirmMessages;
    }
    interface ConfirmEvent {
        sender: Confirm;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class ContextMenu extends kendo.ui.Widget {

        static fn: ContextMenu;

        options: ContextMenuOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ContextMenu;

        constructor(element: Element, options?: ContextMenuOptions);


        append(item: any, referenceItem?: string): kendo.ui.ContextMenu;
        append(item: any, referenceItem?: JQuery): kendo.ui.ContextMenu;
        close(element: Element): kendo.ui.ContextMenu;
        close(element: JQuery): kendo.ui.ContextMenu;
        destroy(): void;
        enable(element: string, enable: boolean): kendo.ui.ContextMenu;
        enable(element: Element, enable: boolean): kendo.ui.ContextMenu;
        enable(element: JQuery, enable: boolean): kendo.ui.ContextMenu;
        insertAfter(item: any, referenceItem: string): kendo.ui.ContextMenu;
        insertAfter(item: any, referenceItem: Element): kendo.ui.ContextMenu;
        insertAfter(item: any, referenceItem: JQuery): kendo.ui.ContextMenu;
        insertBefore(item: any, referenceItem: string): kendo.ui.ContextMenu;
        insertBefore(item: any, referenceItem: Element): kendo.ui.ContextMenu;
        insertBefore(item: any, referenceItem: JQuery): kendo.ui.ContextMenu;
        open(x: number, y?: number): kendo.ui.ContextMenu;
        open(x: Element, y?: number): kendo.ui.ContextMenu;
        open(x: JQuery, y?: number): kendo.ui.ContextMenu;
        remove(element: string): kendo.ui.ContextMenu;
        remove(element: Element): kendo.ui.ContextMenu;
        remove(element: JQuery): kendo.ui.ContextMenu;

    }

    interface ContextMenuAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface ContextMenuAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface ContextMenuAnimation {
        close?: ContextMenuAnimationClose;
        open?: ContextMenuAnimationOpen;
    }

    interface ContextMenuOptions {
        name?: string;
        alignToAnchor?: boolean;
        animation?: boolean|ContextMenuAnimation;
        closeOnClick?: boolean;
        dataSource?: any|any;
        direction?: string;
        filter?: string;
        hoverDelay?: number;
        orientation?: string;
        popupCollision?: string;
        showOn?: string;
        target?: string|JQuery;
        close?(e: ContextMenuCloseEvent): void;
        open?(e: ContextMenuOpenEvent): void;
        activate?(e: ContextMenuActivateEvent): void;
        deactivate?(e: ContextMenuDeactivateEvent): void;
        select?(e: ContextMenuSelectEvent): void;
    }
    interface ContextMenuEvent {
        sender: ContextMenu;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ContextMenuCloseEvent extends ContextMenuEvent {
        item?: Element;
        type?: string;
        target?: Element;
        event?: JQueryEventObject;
    }

    interface ContextMenuOpenEvent extends ContextMenuEvent {
        item?: Element;
        type?: string;
        target?: Element;
        event?: JQueryEventObject;
    }

    interface ContextMenuActivateEvent extends ContextMenuEvent {
        item?: Element;
        type?: string;
        target?: Element;
    }

    interface ContextMenuDeactivateEvent extends ContextMenuEvent {
        item?: Element;
        type?: string;
        target?: Element;
    }

    interface ContextMenuSelectEvent extends ContextMenuEvent {
        item?: Element;
        type?: string;
        target?: Element;
    }


    class DatePicker extends kendo.ui.Widget {

        static fn: DatePicker;

        options: DatePickerOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DatePicker;

        constructor(element: Element, options?: DatePickerOptions);


        close(): void;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        max(): Date;
        max(value: Date): void;
        max(value: string): void;
        min(): Date;
        min(value: Date): void;
        min(value: string): void;
        open(): void;
        setOptions(options: any): void;
        value(): Date;
        value(value: Date): void;
        value(value: string): void;

    }

    interface DatePickerAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface DatePickerAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface DatePickerAnimation {
        close?: DatePickerAnimationClose;
        open?: DatePickerAnimationOpen;
    }

    interface DatePickerMonth {
        content?: string;
        empty?: string;
    }

    interface DatePickerOptions {
        name?: string;
        animation?: boolean|DatePickerAnimation;
        ARIATemplate?: string;
        culture?: string;
        dates?: any;
        depth?: string;
        disableDates?: any|Function;
        footer?: string|Function;
        format?: string;
        max?: Date;
        min?: Date;
        month?: DatePickerMonth;
        parseFormats?: any;
        start?: string;
        value?: Date;
        change?(e: DatePickerChangeEvent): void;
        close?(e: DatePickerCloseEvent): void;
        open?(e: DatePickerOpenEvent): void;
    }
    interface DatePickerEvent {
        sender: DatePicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DatePickerChangeEvent extends DatePickerEvent {
    }

    interface DatePickerCloseEvent extends DatePickerEvent {
    }

    interface DatePickerOpenEvent extends DatePickerEvent {
    }


    class DateTimePicker extends kendo.ui.Widget {

        static fn: DateTimePicker;

        options: DateTimePickerOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DateTimePicker;

        constructor(element: Element, options?: DateTimePickerOptions);


        close(view: string): void;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        max(): Date;
        max(value: Date): void;
        max(value: string): void;
        min(): Date;
        min(value: Date): void;
        min(value: string): void;
        open(view: string): void;
        setOptions(options: any): void;
        toggle(view: string): void;
        value(): Date;
        value(value: Date): void;
        value(value: string): void;

    }

    interface DateTimePickerAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface DateTimePickerAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface DateTimePickerAnimation {
        close?: DateTimePickerAnimationClose;
        open?: DateTimePickerAnimationOpen;
    }

    interface DateTimePickerMonth {
        content?: string;
        empty?: string;
    }

    interface DateTimePickerOptions {
        name?: string;
        animation?: boolean|DateTimePickerAnimation;
        ARIATemplate?: string;
        culture?: string;
        dates?: any;
        depth?: string;
        disableDates?: any|Function;
        footer?: string;
        format?: string;
        interval?: number;
        max?: Date;
        min?: Date;
        month?: DateTimePickerMonth;
        parseFormats?: any;
        start?: string;
        timeFormat?: string;
        value?: Date;
        change?(e: DateTimePickerChangeEvent): void;
        close?(e: DateTimePickerCloseEvent): void;
        open?(e: DateTimePickerOpenEvent): void;
    }
    interface DateTimePickerEvent {
        sender: DateTimePicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DateTimePickerChangeEvent extends DateTimePickerEvent {
    }

    interface DateTimePickerCloseEvent extends DateTimePickerEvent {
        view?: string;
    }

    interface DateTimePickerOpenEvent extends DateTimePickerEvent {
        view?: string;
    }


    class Dialog extends kendo.ui.Widget {

        static fn: Dialog;

        options: DialogOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Dialog;

        constructor(element: Element, options?: DialogOptions);


        close(): kendo.ui.Dialog;
        content(): string;
        content(content?: string): kendo.ui.Dialog;
        content(content?: JQuery): kendo.ui.Dialog;
        destroy(): void;
        open(): kendo.ui.Dialog;
        title(): string;
        title(text?: string): kendo.ui.Dialog;
        toFront(): kendo.ui.Dialog;

    }

    interface DialogAction {
        text?: string;
        action?: Function;
        primary?: boolean;
    }

    interface DialogAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface DialogAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface DialogAnimation {
        close?: DialogAnimationClose;
        open?: DialogAnimationOpen;
    }

    interface DialogMessages {
        close?: string;
    }

    interface DialogOptions {
        name?: string;
        actions?: DialogAction[];
        animation?: boolean|DialogAnimation;
        buttonLayout?: string;
        closable?: boolean;
        content?: string;
        height?: number|string;
        maxHeight?: number;
        maxWidth?: number;
        messages?: DialogMessages;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        title?: string|boolean;
        visible?: boolean;
        width?: number|string;
        close?(e: DialogCloseEvent): void;
        hide?(e: DialogEvent): void;
        initOpen?(e: DialogEvent): void;
        open?(e: DialogEvent): void;
        show?(e: DialogEvent): void;
    }
    interface DialogEvent {
        sender: Dialog;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DialogCloseEvent extends DialogEvent {
        userTriggered?: boolean;
    }


    class DropDownList extends kendo.ui.Widget {

        static fn: DropDownList;

        options: DropDownListOptions;

        dataSource: kendo.data.DataSource;
        span: JQuery;
        filterInput: JQuery;
        list: JQuery;
        ul: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DropDownList;

        constructor(element: Element, options?: DropDownListOptions);


        close(): void;
        dataItem(index?: JQuery): any;
        dataItem(index?: number): any;
        destroy(): void;
        focus(): void;
        items(): any;
        enable(enable: boolean): void;
        open(): void;
        readonly(readonly: boolean): void;
        refresh(): void;
        search(word: string): void;
        select(): number;
        select(li: JQuery): void;
        select(li: number): void;
        select(li: Function): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        text(): string;
        text(text: string): void;
        toggle(toggle: boolean): void;
        value(): string;
        value(value: string): void;

    }

    interface DropDownListAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface DropDownListAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface DropDownListAnimation {
        close?: DropDownListAnimationClose;
        open?: DropDownListAnimationOpen;
    }

    interface DropDownListPopup {
        appendTo?: string;
        origin?: string;
        position?: string;
    }

    interface DropDownListVirtual {
        itemHeight?: number;
        mapValueTo?: string;
        valueMapper?: Function;
    }

    interface DropDownListOptions {
        name?: string;
        animation?: boolean|DropDownListAnimation;
        autoBind?: boolean;
        cascadeFrom?: string;
        cascadeFromField?: string;
        dataSource?: any|any|kendo.data.DataSource;
        dataTextField?: string;
        dataValueField?: string;
        delay?: number;
        enable?: boolean;
        enforceMinLength?: boolean;
        filter?: string;
        fixedGroupTemplate?: string|Function;
        footerTemplate?: string|Function;
        groupTemplate?: string|Function;
        height?: number;
        ignoreCase?: boolean;
        index?: number;
        minLength?: number;
        noDataTemplate?: string|Function;
        popup?: DropDownListPopup;
        optionLabel?: string|any;
        optionLabelTemplate?: string|Function;
        headerTemplate?: string|Function;
        template?: string|Function;
        valueTemplate?: string|Function;
        text?: string;
        value?: string;
        valuePrimitive?: boolean;
        virtual?: boolean|DropDownListVirtual;
        change?(e: DropDownListChangeEvent): void;
        close?(e: DropDownListCloseEvent): void;
        dataBound?(e: DropDownListDataBoundEvent): void;
        filtering?(e: DropDownListFilteringEvent): void;
        open?(e: DropDownListOpenEvent): void;
        select?(e: DropDownListSelectEvent): void;
        cascade?(e: DropDownListCascadeEvent): void;
    }
    interface DropDownListEvent {
        sender: DropDownList;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DropDownListChangeEvent extends DropDownListEvent {
    }

    interface DropDownListCloseEvent extends DropDownListEvent {
    }

    interface DropDownListDataBoundEvent extends DropDownListEvent {
    }

    interface DropDownListFilteringEvent extends DropDownListEvent {
        filter?: any;
    }

    interface DropDownListOpenEvent extends DropDownListEvent {
    }

    interface DropDownListSelectEvent extends DropDownListEvent {
        dataItem?: any;
        item?: JQuery;
    }

    interface DropDownListCascadeEvent extends DropDownListEvent {
    }


    class Editor extends kendo.ui.Widget {

        static fn: Editor;

        options: EditorOptions;

        body: Element;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Editor;

        constructor(element: Element, options?: EditorOptions);


        createRange(document?: Document): Range;
        destroy(): void;
        encodedValue(): void;
        exec(name: string, params: any): void;
        focus(): void;
        getRange(): Range;
        getSelection(): Selection;
        paste(html: string, options: any): void;
        selectedHtml(): string;
        refresh(): void;
        saveAsPDF(): JQueryPromise<any>;
        selectRange(range: Range): void;
        update(): void;
        state(toolName: string): boolean;
        value(): string;
        value(value: string): void;

    }

    interface EditorDeserialization {
        custom?: Function;
    }

    interface EditorFileBrowserMessages {
        uploadFile?: string;
        orderBy?: string;
        orderByName?: string;
        orderBySize?: string;
        directoryNotFound?: string;
        emptyFolder?: string;
        deleteFile?: string;
        invalidFileType?: string;
        overwriteFile?: string;
        search?: string;
    }

    interface EditorFileBrowserSchemaModelFieldsName {
        field?: string;
        parse?: Function;
    }

    interface EditorFileBrowserSchemaModelFieldsSize {
        field?: string;
        parse?: Function;
    }

    interface EditorFileBrowserSchemaModelFieldsType {
        parse?: Function;
        field?: string;
    }

    interface EditorFileBrowserSchemaModelFields {
        name?: EditorFileBrowserSchemaModelFieldsName;
        type?: EditorFileBrowserSchemaModelFieldsType;
        size?: EditorFileBrowserSchemaModelFieldsSize;
    }

    interface EditorFileBrowserSchemaModel {
        id?: string;
        fields?: EditorFileBrowserSchemaModelFields;
    }

    interface EditorFileBrowserSchema {
    }

    interface EditorFileBrowserTransportCreate {
        contentType?: string;
        data?: any|string|Function;
        dataType?: string;
        type?: string;
        url?: string|Function;
    }

    interface EditorFileBrowserTransportDestroy {
        contentType?: string;
        data?: any|string|Function;
        dataType?: string;
        type?: string;
        url?: string|Function;
    }

    interface EditorFileBrowserTransportRead {
        contentType?: string;
        data?: any|string|Function;
        dataType?: string;
        type?: string;
        url?: string|Function;
    }

    interface EditorFileBrowserTransport {
        read?: EditorFileBrowserTransportRead;
        uploadUrl?: string;
        fileUrl?: string|Function;
        destroy?: EditorFileBrowserTransportDestroy;
        create?: EditorFileBrowserTransportCreate;
    }

    interface EditorFileBrowser {
        fileTypes?: string;
        path?: string;
        transport?: EditorFileBrowserTransport;
        schema?: EditorFileBrowserSchema;
        messages?: EditorFileBrowserMessages;
    }

    interface EditorImageBrowserMessages {
        uploadFile?: string;
        orderBy?: string;
        orderByName?: string;
        orderBySize?: string;
        directoryNotFound?: string;
        emptyFolder?: string;
        deleteFile?: string;
        invalidFileType?: string;
        overwriteFile?: string;
        search?: string;
    }

    interface EditorImageBrowserSchemaModelFieldsName {
        field?: string;
        parse?: Function;
    }

    interface EditorImageBrowserSchemaModelFieldsSize {
        field?: string;
        parse?: Function;
    }

    interface EditorImageBrowserSchemaModelFieldsType {
        parse?: Function;
        field?: string;
    }

    interface EditorImageBrowserSchemaModelFields {
        name?: EditorImageBrowserSchemaModelFieldsName;
        type?: EditorImageBrowserSchemaModelFieldsType;
        size?: EditorImageBrowserSchemaModelFieldsSize;
    }

    interface EditorImageBrowserSchemaModel {
        id?: string;
        fields?: EditorImageBrowserSchemaModelFields;
    }

    interface EditorImageBrowserSchema {
    }

    interface EditorImageBrowserTransportCreate {
        contentType?: string;
        data?: any|string|Function;
        dataType?: string;
        type?: string;
        url?: string|Function;
    }

    interface EditorImageBrowserTransportDestroy {
        contentType?: string;
        data?: any|string|Function;
        dataType?: string;
        type?: string;
        url?: string|Function;
    }

    interface EditorImageBrowserTransportRead {
        contentType?: string;
        data?: any|string|Function;
        dataType?: string;
        type?: string;
        url?: string|Function;
    }

    interface EditorImageBrowserTransport {
        read?: EditorImageBrowserTransportRead;
        thumbnailUrl?: string|Function;
        uploadUrl?: string;
        imageUrl?: string|Function;
        destroy?: EditorImageBrowserTransportDestroy;
        create?: EditorImageBrowserTransportCreate;
    }

    interface EditorImageBrowser {
        fileTypes?: string;
        path?: string;
        transport?: EditorImageBrowserTransport;
        schema?: EditorImageBrowserSchema;
        messages?: EditorImageBrowserMessages;
    }

    interface EditorImmutables {
        deserialization?: Function;
        serialization?: string|Function;
    }

    interface EditorMessages {
        accessibilityTab?: string;
        addColumnLeft?: string;
        addColumnRight?: string;
        addRowAbove?: string;
        addRowBelow?: string;
        alignCenter?: string;
        alignCenterBottom?: string;
        alignCenterMiddle?: string;
        alignCenterTop?: string;
        alignLeft?: string;
        alignLeftBottom?: string;
        alignLeftMiddle?: string;
        alignLeftTop?: string;
        alignRemove?: string;
        alignRight?: string;
        alignRightBottom?: string;
        alignRightMiddle?: string;
        alignRightTop?: string;
        alignment?: string;
        associateCellsWithHeaders?: string;
        backColor?: string;
        background?: string;
        bold?: string;
        border?: string;
        style?: string;
        caption?: string;
        cellMargin?: string;
        cellPadding?: string;
        cellSpacing?: string;
        cellTab?: string;
        cleanFormatting?: string;
        collapseBorders?: string;
        columns?: string;
        createLink?: string;
        createTable?: string;
        createTableHint?: string;
        cssClass?: string;
        deleteColumn?: string;
        deleteRow?: string;
        dialogCancel?: string;
        dialogInsert?: string;
        dialogOk?: string;
        dialogUpdate?: string;
        editAreaTitle?: string;
        fileTitle?: string;
        fileWebAddress?: string;
        fontName?: string;
        fontNameInherit?: string;
        fontSize?: string;
        fontSizeInherit?: string;
        foreColor?: string;
        formatBlock?: string;
        formatting?: string;
        height?: string;
        id?: string;
        imageAltText?: string;
        imageHeight?: string;
        imageWebAddress?: string;
        imageWidth?: string;
        indent?: string;
        insertFile?: string;
        insertHtml?: string;
        insertImage?: string;
        insertOrderedList?: string;
        insertUnorderedList?: string;
        italic?: string;
        justifyCenter?: string;
        justifyFull?: string;
        justifyLeft?: string;
        justifyRight?: string;
        linkOpenInNewWindow?: string;
        linkText?: string;
        linkToolTip?: string;
        linkWebAddress?: string;
        outdent?: string;
        print?: string;
        rows?: string;
        selectAllCells?: string;
        strikethrough?: string;
        subscript?: string;
        summary?: string;
        superscript?: string;
        tableTab?: string;
        tableWizard?: string;
        underline?: string;
        unlink?: string;
        viewHtml?: string;
        width?: string;
        wrapText?: string;
    }

    interface EditorPasteCleanup {
        all?: boolean;
        css?: boolean;
        custom?: Function;
        keepNewLines?: boolean;
        msAllFormatting?: boolean;
        msConvertLists?: boolean;
        msTags?: boolean;
        none?: boolean;
        span?: boolean;
    }

    interface EditorPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface EditorPdf {
        author?: string;
        avoidLinks?: boolean|string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: EditorPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface EditorResizable {
        content?: boolean;
        min?: number;
        max?: number;
        toolbar?: boolean;
    }

    interface EditorSerialization {
        custom?: Function;
        entities?: boolean;
        scripts?: boolean;
        semantic?: boolean;
    }

    interface EditorToolItem {
        text?: string;
        value?: string;
        context?: string;
    }

    interface EditorTool {
        name?: string;
        tooltip?: string;
        exec?: Function;
        items?: EditorToolItem[];
        template?: string;
    }

    interface EditorExecParams {
        value?: any;
    }

    interface EditorPasteOptions {
        split?: boolean;
    }

    interface EditorOptions {
        name?: string;
        deserialization?: EditorDeserialization;
        domain?: string;
        encoded?: boolean;
        immutables?: boolean|EditorImmutables;
        messages?: EditorMessages;
        pasteCleanup?: EditorPasteCleanup;
        pdf?: EditorPdf;
        resizable?: boolean|EditorResizable;
        serialization?: EditorSerialization;
        stylesheets?: any;
        tools?: EditorTool[];
        imageBrowser?: EditorImageBrowser;
        fileBrowser?: EditorFileBrowser;
        change?(e: EditorEvent): void;
        execute?(e: EditorExecuteEvent): void;
        keydown?(e: EditorEvent): void;
        keyup?(e: EditorEvent): void;
        paste?(e: EditorPasteEvent): void;
        pdfExport?(e: EditorPdfExportEvent): void;
        select?(e: EditorEvent): void;
    }
    interface EditorEvent {
        sender: Editor;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface EditorExecuteEvent extends EditorEvent {
        name?: string;
        command?: any;
    }

    interface EditorPasteEvent extends EditorEvent {
        html?: any;
    }

    interface EditorPdfExportEvent extends EditorEvent {
        promise?: JQueryPromise<any>;
    }


    class FilterMenu extends kendo.ui.Widget {

        static fn: FilterMenu;

        options: FilterMenuOptions;

        field: string;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): FilterMenu;

        constructor(element: Element, options?: FilterMenuOptions);


        clear(): void;

    }

    interface FilterMenuMessages {
        and?: string;
        clear?: string;
        filter?: string;
        info?: string;
        isFalse?: string;
        isTrue?: string;
        or?: string;
        selectValue?: string;
    }

    interface FilterMenuOperatorsDate {
        eq?: string;
        neq?: string;
        isnull?: string;
        isnotnull?: string;
        gte?: string;
        gt?: string;
        lte?: string;
        lt?: string;
    }

    interface FilterMenuOperatorsEnums {
        eq?: string;
        neq?: string;
        isnull?: string;
        isnotnull?: string;
    }

    interface FilterMenuOperatorsNumber {
        eq?: string;
        neq?: string;
        isnull?: string;
        isnotnull?: string;
        gte?: string;
        gt?: string;
        lte?: string;
        lt?: string;
    }

    interface FilterMenuOperatorsString {
        eq?: string;
        neq?: string;
        isnull?: string;
        isnotnull?: string;
        isempty?: string;
        isnotempty?: string;
        startswith?: string;
        contains?: string;
        doesnotcontain?: string;
        endswith?: string;
    }

    interface FilterMenuOperators {
        string?: FilterMenuOperatorsString;
        number?: FilterMenuOperatorsNumber;
        date?: FilterMenuOperatorsDate;
        enums?: FilterMenuOperatorsEnums;
    }

    interface FilterMenuOptions {
        name?: string;
        dataSource?: any|any|kendo.data.DataSource;
        extra?: boolean;
        field?: string;
        messages?: FilterMenuMessages;
        operators?: FilterMenuOperators;
    }
    interface FilterMenuEvent {
        sender: FilterMenu;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class FlatColorPicker extends kendo.ui.Widget {

        static fn: FlatColorPicker;

        options: FlatColorPickerOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): FlatColorPicker;

        constructor(element: Element, options?: FlatColorPickerOptions);


        focus(): void;
        value(): string;
        value(color?: string): void;
        color(): kendo.Color;
        color(color?: kendo.Color): void;
        enable(enable?: boolean): void;

    }

    interface FlatColorPickerMessages {
        apply?: string;
        cancel?: string;
    }

    interface FlatColorPickerOptions {
        name?: string;
        opacity?: boolean;
        buttons?: boolean;
        value?: string;
        preview?: boolean;
        autoupdate?: boolean;
        messages?: FlatColorPickerMessages;
        change?(e: FlatColorPickerChangeEvent): void;
    }
    interface FlatColorPickerEvent {
        sender: FlatColorPicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface FlatColorPickerChangeEvent extends FlatColorPickerEvent {
        value?: string;
    }


    class Gantt extends kendo.ui.Widget {

        static fn: Gantt;

        options: GanttOptions;

        dataSource: kendo.data.DataSource;
        dependencies: kendo.data.GanttDependencyDataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Gantt;

        constructor(element: Element, options?: GanttOptions);


        clearSelection(): void;
        dataItem(row: string): kendo.data.GanttTask;
        dataItem(row: Element): kendo.data.GanttTask;
        dataItem(row: JQuery): kendo.data.GanttTask;
        date(date?: Date): Date;
        destroy(): void;
        range(range?: any): any;
        refresh(): void;
        refreshDependencies(): void;
        removeDependency(dependency: string): void;
        removeDependency(dependency: kendo.data.GanttDependency): void;
        removeTask(task: string): void;
        removeTask(task: kendo.data.GanttTask): void;
        saveAsPDF(): JQueryPromise<any>;
        select(): JQuery;
        select(row: string): void;
        select(row: Element): void;
        select(row: JQuery): void;
        setDataSource(dataSource: kendo.data.GanttDataSource): void;
        setDependenciesDataSource(dataSource: kendo.data.GanttDependencyDataSource): void;
        view(): kendo.ui.GanttView;
        view(type?: string): void;

    }

    interface GanttAssignments {
        dataSource?: any|any|kendo.data.DataSource;
        dataResourceIdField?: string;
        dataTaskIdField?: string;
        dataValueField?: string;
    }

    interface GanttColumn {
        field?: string;
        title?: string;
        format?: string;
        width?: string|number;
        editable?: boolean;
        sortable?: boolean;
    }

    interface GanttCurrentTimeMarker {
        updateInterval?: number;
    }

    interface GanttEditable {
        confirmation?: boolean;
        create?: boolean;
        dependencyCreate?: boolean;
        dependencyDestroy?: boolean;
        dragPercentComplete?: boolean;
        destroy?: boolean;
        move?: boolean;
        reorder?: boolean;
        resize?: boolean;
        template?: string|Function;
        update?: boolean;
    }

    interface GanttMessagesActions {
        addChild?: string;
        append?: string;
        insertAfter?: string;
        insertBefore?: string;
        pdf?: string;
    }

    interface GanttMessagesEditor {
        assignButton?: string;
        editorTitle?: string;
        end?: string;
        percentComplete?: string;
        resources?: string;
        resourcesEditorTitle?: string;
        resourcesHeader?: string;
        start?: string;
        title?: string;
        unitsHeader?: string;
    }

    interface GanttMessagesViews {
        day?: string;
        end?: string;
        month?: string;
        start?: string;
        week?: string;
        year?: string;
    }

    interface GanttMessages {
        actions?: GanttMessagesActions;
        cancel?: string;
        deleteDependencyConfirmation?: string;
        deleteDependencyWindowTitle?: string;
        deleteTaskConfirmation?: string;
        deleteTaskWindowTitle?: string;
        destroy?: string;
        editor?: GanttMessagesEditor;
        save?: string;
        views?: GanttMessagesViews;
    }

    interface GanttPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface GanttPdf {
        author?: string;
        avoidLinks?: boolean|string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: GanttPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface GanttRange {
        start?: Date;
        end?: Date;
    }

    interface GanttResources {
        dataFormatField?: string;
        dataColorField?: string;
        dataSource?: any|any|kendo.data.DataSource;
        dataTextField?: string;
        field?: string;
    }

    interface GanttToolbarItem {
        name?: string;
        template?: string|Function;
        text?: string;
    }

    interface GanttTooltip {
        template?: string|Function;
        visible?: boolean;
    }

    interface GanttViewRange {
        start?: Date;
        end?: Date;
    }

    interface GanttView {
        date?: Date;
        range?: GanttViewRange;
        type?: string;
        selected?: boolean;
        slotSize?: number|string;
        timeHeaderTemplate?: string|Function;
        dayHeaderTemplate?: string|Function;
        weekHeaderTemplate?: string|Function;
        monthHeaderTemplate?: string|Function;
        yearHeaderTemplate?: string|Function;
        resizeTooltipFormat?: string;
    }

    interface GanttOptions {
        name?: string;
        assignments?: GanttAssignments;
        autoBind?: boolean;
        columnResizeHandleWidth?: number;
        columns?: GanttColumn[];
        currentTimeMarker?: boolean|GanttCurrentTimeMarker;
        dataSource?: any|any|kendo.data.GanttDataSource;
        date?: Date;
        dependencies?: any|any|kendo.data.GanttDependencyDataSource;
        editable?: boolean|GanttEditable;
        navigatable?: boolean;
        workDayStart?: Date;
        workDayEnd?: Date;
        workWeekStart?: number;
        workWeekEnd?: number;
        hourSpan?: number;
        snap?: boolean;
        height?: number|string;
        listWidth?: string|number;
        messages?: GanttMessages;
        pdf?: GanttPdf;
        range?: GanttRange;
        resizable?: boolean;
        selectable?: boolean;
        showWorkDays?: boolean;
        showWorkHours?: boolean;
        taskTemplate?: string|Function;
        toolbar?: GanttToolbarItem[];
        tooltip?: GanttTooltip;
        views?: GanttView[];
        resources?: GanttResources;
        rowHeight?: number|string;
        dataBinding?(e: GanttDataBindingEvent): void;
        dataBound?(e: GanttDataBoundEvent): void;
        add?(e: GanttAddEvent): void;
        edit?(e: GanttEditEvent): void;
        remove?(e: GanttRemoveEvent): void;
        cancel?(e: GanttCancelEvent): void;
        save?(e: GanttSaveEvent): void;
        change?(e: GanttChangeEvent): void;
        columnResize?(e: GanttColumnResizeEvent): void;
        navigate?(e: GanttNavigateEvent): void;
        moveStart?(e: GanttMoveStartEvent): void;
        move?(e: GanttMoveEvent): void;
        moveEnd?(e: GanttMoveEndEvent): void;
        pdfExport?(e: GanttPdfExportEvent): void;
        resizeStart?(e: GanttResizeStartEvent): void;
        resize?(e: GanttResizeEvent): void;
        resizeEnd?(e: GanttResizeEndEvent): void;
    }
    interface GanttEvent {
        sender: Gantt;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface GanttDataBindingEvent extends GanttEvent {
    }

    interface GanttDataBoundEvent extends GanttEvent {
    }

    interface GanttAddEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        dependency?: kendo.data.GanttDependency;
    }

    interface GanttEditEvent extends GanttEvent {
        container?: JQuery;
        task?: kendo.data.GanttTask;
    }

    interface GanttRemoveEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        dependencies?: any;
    }

    interface GanttCancelEvent extends GanttEvent {
        container?: JQuery;
        task?: kendo.data.GanttTask;
    }

    interface GanttSaveEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        values?: any;
    }

    interface GanttChangeEvent extends GanttEvent {
    }

    interface GanttColumnResizeEvent extends GanttEvent {
        column?: any;
        newWidth?: number;
        oldWidth?: number;
    }

    interface GanttNavigateEvent extends GanttEvent {
        view?: string;
    }

    interface GanttMoveStartEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
    }

    interface GanttMoveEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        start?: Date;
        end?: Date;
    }

    interface GanttMoveEndEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        start?: Date;
        end?: Date;
    }

    interface GanttPdfExportEvent extends GanttEvent {
        promise?: JQueryPromise<any>;
    }

    interface GanttResizeStartEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
    }

    interface GanttResizeEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        start?: Date;
        end?: Date;
    }

    interface GanttResizeEndEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        start?: Date;
        end?: Date;
    }


    class Grid extends kendo.ui.Widget {

        static fn: Grid;

        options: GridOptions;

        dataSource: kendo.data.DataSource;
        columns: GridColumn[];
        footer: JQuery;
        pager: kendo.ui.Pager;
        table: JQuery;
        tbody: JQuery;
        thead: JQuery;
        content: JQuery;
        lockedHeader: JQuery;
        lockedTable: JQuery;
        lockedContent: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Grid;

        constructor(element: Element, options?: GridOptions);


        addRow(): void;
        autoFitColumn(column: number): void;
        autoFitColumn(column: string): void;
        autoFitColumn(column: any): void;
        cancelChanges(): void;
        cancelRow(): void;
        cellIndex(cell: string): number;
        cellIndex(cell: Element): number;
        cellIndex(cell: JQuery): number;
        clearSelection(): void;
        closeCell(isCancel?: boolean): void;
        collapseGroup(row: string): void;
        collapseGroup(row: Element): void;
        collapseGroup(row: JQuery): void;
        collapseRow(row: string): void;
        collapseRow(row: Element): void;
        collapseRow(row: JQuery): void;
        current(): JQuery;
        current(cell: JQuery): void;
        dataItem(row: string): kendo.data.ObservableObject;
        dataItem(row: Element): kendo.data.ObservableObject;
        dataItem(row: JQuery): kendo.data.ObservableObject;
        destroy(): void;
        editCell(cell: JQuery): void;
        editRow(row: JQuery): void;
        expandGroup(row: string): void;
        expandGroup(row: Element): void;
        expandGroup(row: JQuery): void;
        expandRow(row: string): void;
        expandRow(row: Element): void;
        expandRow(row: JQuery): void;
        getOptions(): GridOptions;
        hideColumn(column: number): void;
        hideColumn(column: string): void;
        hideColumn(column: any): void;
        items(): any;
        lockColumn(column: number): void;
        lockColumn(column: string): void;
        refresh(): void;
        removeRow(row: string): void;
        removeRow(row: Element): void;
        removeRow(row: JQuery): void;
        reorderColumn(destIndex: number, column: any): void;
        saveAsExcel(): void;
        saveAsPDF(): JQueryPromise<any>;
        saveChanges(): void;
        saveRow(): void;
        select(): JQuery;
        select(rows: string): void;
        select(rows: Element): void;
        select(rows: JQuery): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        setOptions(options: any): void;
        showColumn(column: number): void;
        showColumn(column: string): void;
        showColumn(column: any): void;
        unlockColumn(column: number): void;
        unlockColumn(column: string): void;

    }

    interface GridAllowCopy {
        delimeter?: string|any;
    }

    interface GridColumnMenuMessages {
        columns?: string;
        filter?: string;
        sortAscending?: string;
        sortDescending?: string;
        settings?: string;
        done?: string;
        lock?: string;
        unlock?: string;
    }

    interface GridColumnMenu {
        columns?: boolean;
        filterable?: boolean;
        sortable?: boolean;
        messages?: GridColumnMenuMessages;
    }

    interface GridColumnCommandItemText {
        edit?: string;
        cancel?: string;
        update?: string;
    }

    interface GridColumnCommandItem {
        name?: string;
        text?: GridColumnCommandItemText;
        className?: string;
        click?: Function;
    }

    interface GridColumnFilterableCell {
        dataSource?: any|kendo.data.DataSource;
        dataTextField?: string;
        delay?: number;
        inputWidth?: number;
        suggestionOperator?: string;
        minLength?: number;
        enabled?: boolean;
        operator?: string;
        showOperators?: boolean;
        template?: Function;
    }

    interface GridColumnFilterable {
        cell?: GridColumnFilterableCell;
        multi?: boolean;
        dataSource?: any|any|kendo.data.DataSource;
        checkAll?: boolean;
        itemTemplate?: Function;
        operators?: any;
        search?: boolean;
        ignoreCase?: boolean;
        ui?: string|Function;
    }

    interface GridColumnSortable {
        compare?: Function;
    }

    interface GridColumn {
        aggregates?: any;
        attributes?: any;
        columns?: any;
        command?: GridColumnCommandItem[];
        encoded?: boolean;
        field?: string;
        filterable?: boolean|GridColumnFilterable;
        footerAttributes?: any;
        footerTemplate?: string|Function;
        format?: string;
        groupable?: boolean;
        groupHeaderTemplate?: string|Function;
        groupFooterTemplate?: string|Function;
        headerAttributes?: any;
        headerTemplate?: string|Function;
        hidden?: boolean;
        locked?: boolean;
        lockable?: boolean;
        minScreenWidth?: number;
        sortable?: boolean|GridColumnSortable;
        template?: string|Function;
        title?: string;
        width?: string|number;
        values?: any;
        menu?: boolean;
    }

    interface GridEditable {
        confirmation?: boolean|string|Function;
        cancelDelete?: string;
        confirmDelete?: string;
        createAt?: string;
        destroy?: boolean;
        mode?: string;
        template?: string|Function;
        update?: boolean;
        window?: any;
    }

    interface GridExcel {
        allPages?: boolean;
        fileName?: string;
        filterable?: boolean;
        forceProxy?: boolean;
        proxyURL?: string;
    }

    interface GridFilterableMessages {
        and?: string;
        clear?: string;
        filter?: string;
        info?: string;
        isFalse?: string;
        isTrue?: string;
        or?: string;
        search?: string;
        selectValue?: string;
        cancel?: string;
        selectedItemsFormat?: string;
        operator?: string;
        value?: string;
        checkAll?: string;
    }

    interface GridFilterableOperatorsDate {
        eq?: string;
        neq?: string;
        isnull?: string;
        isnotnull?: string;
        gte?: string;
        gt?: string;
        lte?: string;
        lt?: string;
    }

    interface GridFilterableOperatorsEnums {
        eq?: string;
        neq?: string;
        isnull?: string;
        isnotnull?: string;
    }

    interface GridFilterableOperatorsNumber {
        eq?: string;
        neq?: string;
        isnull?: string;
        isnotnull?: string;
        gte?: string;
        gt?: string;
        lte?: string;
        lt?: string;
    }

    interface GridFilterableOperatorsString {
        eq?: string;
        neq?: string;
        isnull?: string;
        isnotnull?: string;
        isempty?: string;
        isnotempty?: string;
        startswith?: string;
        contains?: string;
        doesnotcontain?: string;
        endswith?: string;
    }

    interface GridFilterableOperators {
        string?: GridFilterableOperatorsString;
        number?: GridFilterableOperatorsNumber;
        date?: GridFilterableOperatorsDate;
        enums?: GridFilterableOperatorsEnums;
    }

    interface GridFilterable {
        extra?: boolean;
        messages?: GridFilterableMessages;
        operators?: GridFilterableOperators;
        mode?: string;
    }

    interface GridGroupableMessages {
        empty?: string;
    }

    interface GridGroupable {
        enabled?: boolean;
        showFooter?: boolean;
        messages?: GridGroupableMessages;
    }

    interface GridMessagesCommands {
        cancel?: string;
        canceledit?: string;
        create?: string;
        destroy?: string;
        edit?: string;
        excel?: string;
        save?: string;
        update?: string;
    }

    interface GridMessages {
        commands?: GridMessagesCommands;
        noRecords?: string;
    }

    interface GridNoRecords {
        template?: string|Function;
    }

    interface GridPageableMessages {
        display?: string;
        empty?: string;
        page?: string;
        of?: string;
        itemsPerPage?: string;
        first?: string;
        last?: string;
        next?: string;
        previous?: string;
        refresh?: string;
        morePages?: string;
    }

    interface GridPageable {
        pageSize?: number;
        previousNext?: boolean;
        numeric?: boolean;
        buttonCount?: number;
        input?: boolean;
        pageSizes?: boolean|any;
        refresh?: boolean;
        info?: boolean;
        messages?: GridPageableMessages;
    }

    interface GridPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface GridPdf {
        allPages?: boolean;
        author?: string;
        avoidLinks?: boolean|string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: GridPdfMargin;
        paperSize?: string|any;
        template?: string;
        repeatHeaders?: boolean;
        scale?: number;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface GridScrollable {
        virtual?: boolean;
    }

    interface GridSortable {
        allowUnsort?: boolean;
        mode?: string;
    }

    interface GridToolbarItem {
        name?: string;
        template?: string|Function;
        text?: string;
    }

    interface GridOptions {
        name?: string;
        allowCopy?: boolean|GridAllowCopy;
        altRowTemplate?: string|Function;
        autoBind?: boolean;
        columnResizeHandleWidth?: number;
        columns?: GridColumn[];
        columnMenu?: boolean|GridColumnMenu;
        dataSource?: any|any|kendo.data.DataSource;
        detailTemplate?: string|Function;
        editable?: boolean|GridEditable;
        excel?: GridExcel;
        filterable?: boolean|GridFilterable;
        groupable?: boolean|GridGroupable;
        height?: number|string;
        messages?: GridMessages;
        mobile?: boolean|string;
        navigatable?: boolean;
        noRecords?: boolean|GridNoRecords;
        pageable?: boolean|GridPageable;
        pdf?: GridPdf;
        reorderable?: boolean;
        resizable?: boolean;
        rowTemplate?: string|Function;
        scrollable?: boolean|GridScrollable;
        selectable?: boolean|string;
        sortable?: boolean|GridSortable;
        toolbar?: GridToolbarItem[] | any;
        cancel?(e: GridCancelEvent): void;
        change?(e: GridChangeEvent): void;
        columnHide?(e: GridColumnHideEvent): void;
        columnMenuInit?(e: GridColumnMenuInitEvent): void;
        columnReorder?(e: GridColumnReorderEvent): void;
        columnResize?(e: GridColumnResizeEvent): void;
        columnShow?(e: GridColumnShowEvent): void;
        dataBinding?(e: GridDataBindingEvent): void;
        dataBound?(e: GridDataBoundEvent): void;
        detailCollapse?(e: GridDetailCollapseEvent): void;
        detailExpand?(e: GridDetailExpandEvent): void;
        detailInit?(e: GridDetailInitEvent): void;
        edit?(e: GridEditEvent): void;
        excelExport?(e: GridExcelExportEvent): void;
        filter?(e: GridFilterEvent): void;
        group?(e: GridGroupEvent): void;
        page?(e: GridPageEvent): void;
        pdfExport?(e: GridPdfExportEvent): void;
        filterMenuInit?(e: GridFilterMenuInitEvent): void;
        remove?(e: GridRemoveEvent): void;
        save?(e: GridSaveEvent): void;
        saveChanges?(e: GridSaveChangesEvent): void;
        sort?(e: GridSortEvent): void;
        columnLock?(e: GridColumnLockEvent): void;
        columnUnlock?(e: GridColumnUnlockEvent): void;
        navigate?(e: GridNavigateEvent): void;
    }
    interface GridEvent {
        sender: Grid;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface GridCancelEvent extends GridEvent {
        container?: JQuery;
        model?: kendo.data.Model;
    }

    interface GridChangeEvent extends GridEvent {
    }

    interface GridColumnHideEvent extends GridEvent {
        column?: any;
    }

    interface GridColumnMenuInitEvent extends GridEvent {
        container?: JQuery;
        field?: string;
    }

    interface GridColumnReorderEvent extends GridEvent {
        column?: any;
        newIndex?: number;
        oldIndex?: number;
    }

    interface GridColumnResizeEvent extends GridEvent {
        column?: any;
        newWidth?: number;
        oldWidth?: number;
    }

    interface GridColumnShowEvent extends GridEvent {
        column?: any;
    }

    interface GridDataBindingEvent extends GridEvent {
        action?: string;
        index?: number;
        items?: any;
    }

    interface GridDataBoundEvent extends GridEvent {
    }

    interface GridDetailCollapseEvent extends GridEvent {
        detailRow?: JQuery;
        masterRow?: JQuery;
    }

    interface GridDetailExpandEvent extends GridEvent {
        detailRow?: JQuery;
        masterRow?: JQuery;
    }

    interface GridDetailInitEvent extends GridEvent {
        data?: kendo.data.ObservableObject;
        detailCell?: JQuery;
        detailRow?: JQuery;
        masterRow?: JQuery;
    }

    interface GridEditEvent extends GridEvent {
        container?: JQuery;
        model?: kendo.data.Model;
    }

    interface GridExcelExportEvent extends GridEvent {
        data?: any;
        workbook?: kendo.ooxml.Workbook;
    }

    interface GridFilterEvent extends GridEvent {
        filter?: any;
        field?: string;
    }

    interface GridGroupEvent extends GridEvent {
        groups?: any;
    }

    interface GridPageEvent extends GridEvent {
        page?: number;
    }

    interface GridPdfExportEvent extends GridEvent {
        promise?: JQueryPromise<any>;
    }

    interface GridFilterMenuInitEvent extends GridEvent {
        container?: JQuery;
        field?: string;
    }

    interface GridRemoveEvent extends GridEvent {
        model?: kendo.data.Model;
        row?: JQuery;
    }

    interface GridSaveEvent extends GridEvent {
        model?: kendo.data.Model;
        container?: JQuery;
        values?: any;
    }

    interface GridSaveChangesEvent extends GridEvent {
    }

    interface GridSortEvent extends GridEvent {
        sort?: any;
    }

    interface GridColumnLockEvent extends GridEvent {
        column?: any;
    }

    interface GridColumnUnlockEvent extends GridEvent {
        column?: any;
    }

    interface GridNavigateEvent extends GridEvent {
        element?: JQuery;
    }


    class ListView extends kendo.ui.Widget {

        static fn: ListView;

        options: ListViewOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ListView;

        constructor(element: Element, options?: ListViewOptions);


        add(): void;
        cancel(): void;
        clearSelection(): void;
        dataItem(row: string): kendo.data.ObservableObject;
        dataItem(row: Element): kendo.data.ObservableObject;
        dataItem(row: JQuery): kendo.data.ObservableObject;
        dataItems(): void;
        destroy(): void;
        edit(item: JQuery): void;
        items(): any;
        refresh(): void;
        remove(item: any): void;
        save(): void;
        select(): JQuery;
        select(items: JQuery): void;
        select(items: any): void;
        setDataSource(dataSource: kendo.data.DataSource): void;

    }

    interface ListViewOptions {
        name?: string;
        autoBind?: boolean;
        dataSource?: any|any|kendo.data.DataSource;
        editTemplate?: Function;
        navigatable?: boolean;
        selectable?: boolean|string;
        template?: Function;
        altTemplate?: Function;
        cancel?(e: ListViewCancelEvent): void;
        change?(e: ListViewEvent): void;
        dataBound?(e: ListViewEvent): void;
        dataBinding?(e: ListViewEvent): void;
        edit?(e: ListViewEditEvent): void;
        remove?(e: ListViewRemoveEvent): void;
        save?(e: ListViewSaveEvent): void;
    }
    interface ListViewEvent {
        sender: ListView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ListViewCancelEvent extends ListViewEvent {
        container?: JQuery;
        model?: kendo.data.Model;
    }

    interface ListViewEditEvent extends ListViewEvent {
        item?: JQuery;
        model?: kendo.data.Model;
    }

    interface ListViewRemoveEvent extends ListViewEvent {
        item?: JQuery;
        model?: kendo.data.Model;
    }

    interface ListViewSaveEvent extends ListViewEvent {
        model?: kendo.data.Model;
        item?: JQuery;
    }


    class MaskedTextBox extends kendo.ui.Widget {

        static fn: MaskedTextBox;

        options: MaskedTextBoxOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): MaskedTextBox;

        constructor(element: Element, options?: MaskedTextBoxOptions);


        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        raw(): string;
        value(): string;
        value(value: string): void;

    }

    interface MaskedTextBoxOptions {
        name?: string;
        clearPromptChar?: boolean;
        culture?: string;
        mask?: string;
        promptChar?: string;
        rules?: any;
        unmaskOnPost?: boolean;
        value?: string;
        change?(e: MaskedTextBoxChangeEvent): void;
    }
    interface MaskedTextBoxEvent {
        sender: MaskedTextBox;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface MaskedTextBoxChangeEvent extends MaskedTextBoxEvent {
    }


    class MediaPlayer extends kendo.ui.Widget {

        static fn: MediaPlayer;

        options: MediaPlayerOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): MediaPlayer;

        constructor(element: Element, options?: MediaPlayerOptions);


        fullScreen(): void;
        fullScreen(value: boolean): void;
        volume(): void;
        volume(value: number): void;
        mute(value: boolean): void;
        isEnded(): void;
        isPaused(): void;
        isPlaying(): void;
        pause(): void;
        play(): void;
        seek(milliseconds: number): void;
        stop(): void;
        titlebar(): void;
        toolbar(): void;

    }

    interface MediaPlayerMedia {
        source?: string;
        title?: string;
    }

    interface MediaPlayerMessages {
        pause?: string;
        play?: string;
        mute?: string;
        unmute?: string;
        quality?: string;
        fullscreen?: string;
    }

    interface MediaPlayerOptions {
        name?: string;
        autoPlay?: boolean;
        autoRepeat?: boolean;
        forwardSeek?: boolean;
        fullScreen?: boolean;
        media?: MediaPlayerMedia;
        messages?: MediaPlayerMessages;
        mute?: boolean;
        navigatable?: boolean;
        volume?: number;
        end?(e: MediaPlayerEvent): void;
        pause?(e: MediaPlayerEvent): void;
        play?(e: MediaPlayerEvent): void;
        ready?(e: MediaPlayerEvent): void;
        timeChange?(e: MediaPlayerEvent): void;
        volumeChange?(e: MediaPlayerEvent): void;
    }
    interface MediaPlayerEvent {
        sender: MediaPlayer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Menu extends kendo.ui.Widget {

        static fn: Menu;

        options: MenuOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Menu;

        constructor(element: Element, options?: MenuOptions);


        append(item: any, referenceItem?: string): kendo.ui.Menu;
        append(item: any, referenceItem?: JQuery): kendo.ui.Menu;
        close(element: string): kendo.ui.Menu;
        close(element: Element): kendo.ui.Menu;
        close(element: JQuery): kendo.ui.Menu;
        destroy(): void;
        enable(element: string, enable: boolean): kendo.ui.Menu;
        enable(element: Element, enable: boolean): kendo.ui.Menu;
        enable(element: JQuery, enable: boolean): kendo.ui.Menu;
        insertAfter(item: any, referenceItem: string): kendo.ui.Menu;
        insertAfter(item: any, referenceItem: Element): kendo.ui.Menu;
        insertAfter(item: any, referenceItem: JQuery): kendo.ui.Menu;
        insertBefore(item: any, referenceItem: string): kendo.ui.Menu;
        insertBefore(item: any, referenceItem: Element): kendo.ui.Menu;
        insertBefore(item: any, referenceItem: JQuery): kendo.ui.Menu;
        open(element: string): kendo.ui.Menu;
        open(element: Element): kendo.ui.Menu;
        open(element: JQuery): kendo.ui.Menu;
        remove(element: string): kendo.ui.Menu;
        remove(element: Element): kendo.ui.Menu;
        remove(element: JQuery): kendo.ui.Menu;

    }

    interface MenuAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface MenuAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface MenuAnimation {
        close?: MenuAnimationClose;
        open?: MenuAnimationOpen;
    }

    interface MenuOptions {
        name?: string;
        animation?: boolean|MenuAnimation;
        closeOnClick?: boolean;
        dataSource?: any|any;
        direction?: string;
        hoverDelay?: number;
        openOnClick?: boolean;
        orientation?: string;
        popupCollision?: string;
        close?(e: MenuCloseEvent): void;
        open?(e: MenuOpenEvent): void;
        activate?(e: MenuActivateEvent): void;
        deactivate?(e: MenuDeactivateEvent): void;
        select?(e: MenuSelectEvent): void;
    }
    interface MenuEvent {
        sender: Menu;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface MenuCloseEvent extends MenuEvent {
        item?: HTMLElement;
    }

    interface MenuOpenEvent extends MenuEvent {
        item?: HTMLElement;
    }

    interface MenuActivateEvent extends MenuEvent {
        item?: HTMLElement;
    }

    interface MenuDeactivateEvent extends MenuEvent {
        item?: HTMLElement;
    }

    interface MenuSelectEvent extends MenuEvent {
        item?: HTMLElement;
    }


    class MultiSelect extends kendo.ui.Widget {

        static fn: MultiSelect;

        options: MultiSelectOptions;

        dataSource: kendo.data.DataSource;
        input: JQuery;
        list: JQuery;
        ul: JQuery;
        tagList: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): MultiSelect;

        constructor(element: Element, options?: MultiSelectOptions);


        close(): void;
        dataItems(): any;
        destroy(): void;
        enable(enable: boolean): void;
        focus(): void;
        items(): any;
        open(): void;
        readonly(readonly: boolean): void;
        refresh(): void;
        search(word: string): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        toggle(toggle?: boolean): void;
        value(): any;
        value(value: any): void;
        value(value: string): void;

    }

    interface MultiSelectAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface MultiSelectAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface MultiSelectAnimation {
        close?: MultiSelectAnimationClose;
        open?: MultiSelectAnimationOpen;
    }

    interface MultiSelectPopup {
        appendTo?: string;
        origin?: string;
        position?: string;
    }

    interface MultiSelectVirtual {
        itemHeight?: number;
        mapValueTo?: string;
        valueMapper?: Function;
    }

    interface MultiSelectOptions {
        name?: string;
        animation?: boolean|MultiSelectAnimation;
        autoBind?: boolean;
        autoClose?: boolean;
        clearButton?: boolean;
        dataSource?: any|any|kendo.data.DataSource;
        dataTextField?: string;
        dataValueField?: string;
        delay?: number;
        enable?: boolean;
        enforceMinLength?: boolean;
        filter?: string;
        fixedGroupTemplate?: string|Function;
        footerTemplate?: string|Function;
        groupTemplate?: string|Function;
        height?: number;
        highlightFirst?: boolean;
        ignoreCase?: boolean;
        minLength?: number;
        maxSelectedItems?: number;
        noDataTemplate?: string|Function;
        placeholder?: string;
        popup?: MultiSelectPopup;
        headerTemplate?: string|Function;
        itemTemplate?: string|Function;
        tagTemplate?: string;
        tagMode?: string;
        value?: any;
        valuePrimitive?: boolean;
        virtual?: boolean|MultiSelectVirtual;
        change?(e: MultiSelectChangeEvent): void;
        close?(e: MultiSelectCloseEvent): void;
        dataBound?(e: MultiSelectDataBoundEvent): void;
        filtering?(e: MultiSelectFilteringEvent): void;
        open?(e: MultiSelectOpenEvent): void;
        select?(e: MultiSelectSelectEvent): void;
        deselect?(e: MultiSelectDeselectEvent): void;
    }
    interface MultiSelectEvent {
        sender: MultiSelect;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface MultiSelectChangeEvent extends MultiSelectEvent {
    }

    interface MultiSelectCloseEvent extends MultiSelectEvent {
    }

    interface MultiSelectDataBoundEvent extends MultiSelectEvent {
    }

    interface MultiSelectFilteringEvent extends MultiSelectEvent {
        filter?: any;
    }

    interface MultiSelectOpenEvent extends MultiSelectEvent {
    }

    interface MultiSelectSelectEvent extends MultiSelectEvent {
        dataItem?: any;
        item?: JQuery;
    }

    interface MultiSelectDeselectEvent extends MultiSelectEvent {
        dataItem?: any;
        item?: JQuery;
    }


    class Notification extends kendo.ui.Widget {

        static fn: Notification;

        options: NotificationOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Notification;

        constructor(element: Element, options?: NotificationOptions);


        error(data: any): void;
        error(data: string): void;
        error(data: Function): void;
        getNotifications(): JQuery;
        hide(): void;
        info(data: any): void;
        info(data: string): void;
        info(data: Function): void;
        show(data: any, type: string): void;
        show(data: string, type: string): void;
        show(data: Function, type: string): void;
        showText(data: any, type: string): void;
        showText(data: string, type: string): void;
        showText(data: Function, type: string): void;
        success(data: any): void;
        success(data: string): void;
        success(data: Function): void;
        warning(data: any): void;
        warning(data: string): void;
        warning(data: Function): void;

    }

    interface NotificationPosition {
        bottom?: number;
        left?: number;
        pinned?: boolean;
        right?: number;
        top?: number;
    }

    interface NotificationTemplate {
        type?: string;
        template?: string;
    }

    interface NotificationOptions {
        name?: string;
        allowHideAfter?: number;
        animation?: any|boolean;
        appendTo?: string|JQuery;
        autoHideAfter?: number;
        button?: boolean;
        height?: number|string;
        hideOnClick?: boolean;
        position?: NotificationPosition;
        stacking?: string;
        templates?: NotificationTemplate[];
        width?: number|string;
        hide?(e: NotificationHideEvent): void;
        show?(e: NotificationShowEvent): void;
    }
    interface NotificationEvent {
        sender: Notification;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface NotificationHideEvent extends NotificationEvent {
        element?: JQuery;
    }

    interface NotificationShowEvent extends NotificationEvent {
        element?: JQuery;
    }


    class NumericTextBox extends kendo.ui.Widget {

        static fn: NumericTextBox;

        options: NumericTextBoxOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): NumericTextBox;

        constructor(element: Element, options?: NumericTextBoxOptions);


        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        focus(): void;
        max(): number;
        max(value: number): void;
        max(value: string): void;
        min(): number;
        min(value: number): void;
        min(value: string): void;
        step(): number;
        step(value: number): void;
        step(value: string): void;
        value(): number;
        value(value: number): void;
        value(value: string): void;

    }

    interface NumericTextBoxOptions {
        name?: string;
        culture?: string;
        decimals?: number;
        downArrowText?: string;
        format?: string;
        max?: number;
        min?: number;
        placeholder?: string;
        restrictDecimals?: boolean;
        round?: boolean;
        spinners?: boolean;
        step?: number;
        upArrowText?: string;
        value?: number;
        change?(e: NumericTextBoxChangeEvent): void;
        spin?(e: NumericTextBoxSpinEvent): void;
    }
    interface NumericTextBoxEvent {
        sender: NumericTextBox;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface NumericTextBoxChangeEvent extends NumericTextBoxEvent {
    }

    interface NumericTextBoxSpinEvent extends NumericTextBoxEvent {
    }


    class Pager extends kendo.ui.Widget {

        static fn: Pager;

        options: PagerOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Pager;

        constructor(element: Element, options?: PagerOptions);


        totalPages(): number;
        pageSize(): number;
        page(): number;
        page(page: number): void;
        refresh(): void;
        destroy(): void;

    }

    interface PagerMessages {
        display?: string;
        empty?: string;
        allPages?: string;
        page?: string;
        of?: string;
        itemsPerPage?: string;
        first?: string;
        previous?: string;
        next?: string;
        last?: string;
        refresh?: string;
    }

    interface PagerOptions {
        name?: string;
        autoBind?: boolean;
        buttonCount?: number;
        dataSource?: any|kendo.data.DataSource;
        selectTemplate?: string;
        linkTemplate?: string;
        info?: boolean;
        input?: boolean;
        numeric?: boolean;
        pageSizes?: boolean|any;
        previousNext?: boolean;
        refresh?: boolean;
        messages?: PagerMessages;
        change?(e: PagerChangeEvent): void;
    }
    interface PagerEvent {
        sender: Pager;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PagerChangeEvent extends PagerEvent {
    }


    class PanelBar extends kendo.ui.Widget {

        static fn: PanelBar;

        options: PanelBarOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PanelBar;

        constructor(element: Element, options?: PanelBarOptions);


        append(item: string, referenceItem: string): kendo.ui.PanelBar;
        append(item: string, referenceItem: Element): kendo.ui.PanelBar;
        append(item: string, referenceItem: JQuery): kendo.ui.PanelBar;
        append(item: Element, referenceItem: string): kendo.ui.PanelBar;
        append(item: Element, referenceItem: Element): kendo.ui.PanelBar;
        append(item: Element, referenceItem: JQuery): kendo.ui.PanelBar;
        append(item: JQuery, referenceItem: string): kendo.ui.PanelBar;
        append(item: JQuery, referenceItem: Element): kendo.ui.PanelBar;
        append(item: JQuery, referenceItem: JQuery): kendo.ui.PanelBar;
        append(item: any, referenceItem: string): kendo.ui.PanelBar;
        append(item: any, referenceItem: Element): kendo.ui.PanelBar;
        append(item: any, referenceItem: JQuery): kendo.ui.PanelBar;
        clearSelection(): void;
        collapse(element: string, useAnimation: boolean): kendo.ui.PanelBar;
        collapse(element: Element, useAnimation: boolean): kendo.ui.PanelBar;
        collapse(element: JQuery, useAnimation: boolean): kendo.ui.PanelBar;
        destroy(): void;
        enable(element: string, enable: boolean): void;
        enable(element: Element, enable: boolean): void;
        enable(element: JQuery, enable: boolean): void;
        expand(element: string, useAnimation: boolean): kendo.ui.PanelBar;
        expand(element: Element, useAnimation: boolean): kendo.ui.PanelBar;
        expand(element: JQuery, useAnimation: boolean): kendo.ui.PanelBar;
        insertAfter(item: string, referenceItem: string): void;
        insertAfter(item: string, referenceItem: Element): void;
        insertAfter(item: string, referenceItem: JQuery): void;
        insertAfter(item: Element, referenceItem: string): void;
        insertAfter(item: Element, referenceItem: Element): void;
        insertAfter(item: Element, referenceItem: JQuery): void;
        insertAfter(item: JQuery, referenceItem: string): void;
        insertAfter(item: JQuery, referenceItem: Element): void;
        insertAfter(item: JQuery, referenceItem: JQuery): void;
        insertAfter(item: any, referenceItem: string): void;
        insertAfter(item: any, referenceItem: Element): void;
        insertAfter(item: any, referenceItem: JQuery): void;
        insertBefore(item: string, referenceItem: string): kendo.ui.PanelBar;
        insertBefore(item: string, referenceItem: Element): kendo.ui.PanelBar;
        insertBefore(item: string, referenceItem: JQuery): kendo.ui.PanelBar;
        insertBefore(item: Element, referenceItem: string): kendo.ui.PanelBar;
        insertBefore(item: Element, referenceItem: Element): kendo.ui.PanelBar;
        insertBefore(item: Element, referenceItem: JQuery): kendo.ui.PanelBar;
        insertBefore(item: JQuery, referenceItem: string): kendo.ui.PanelBar;
        insertBefore(item: JQuery, referenceItem: Element): kendo.ui.PanelBar;
        insertBefore(item: JQuery, referenceItem: JQuery): kendo.ui.PanelBar;
        insertBefore(item: any, referenceItem: string): kendo.ui.PanelBar;
        insertBefore(item: any, referenceItem: Element): kendo.ui.PanelBar;
        insertBefore(item: any, referenceItem: JQuery): kendo.ui.PanelBar;
        reload(element: string): void;
        reload(element: Element): void;
        reload(element: JQuery): void;
        remove(element: string): void;
        remove(element: Element): void;
        remove(element: JQuery): void;
        select(): JQuery;
        select(element?: string): void;
        select(element?: Element): void;
        select(element?: JQuery): void;

    }

    interface PanelBarAnimationCollapse {
        duration?: number;
        effects?: string;
    }

    interface PanelBarAnimationExpand {
        duration?: number;
        effects?: string;
    }

    interface PanelBarAnimation {
        collapse?: PanelBarAnimationCollapse;
        expand?: PanelBarAnimationExpand;
    }

    interface PanelBarOptions {
        name?: string;
        animation?: boolean|PanelBarAnimation;
        contentUrls?: any;
        dataSource?: any|any;
        expandMode?: string;
        activate?(e: PanelBarActivateEvent): void;
        collapse?(e: PanelBarCollapseEvent): void;
        contentLoad?(e: PanelBarContentLoadEvent): void;
        error?(e: PanelBarErrorEvent): void;
        expand?(e: PanelBarExpandEvent): void;
        select?(e: PanelBarSelectEvent): void;
    }
    interface PanelBarEvent {
        sender: PanelBar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PanelBarActivateEvent extends PanelBarEvent {
        item?: Element;
    }

    interface PanelBarCollapseEvent extends PanelBarEvent {
        item?: Element;
    }

    interface PanelBarContentLoadEvent extends PanelBarEvent {
        item?: Element;
        contentElement?: Element;
    }

    interface PanelBarErrorEvent extends PanelBarEvent {
        xhr?: JQueryXHR;
        status?: string;
    }

    interface PanelBarExpandEvent extends PanelBarEvent {
        item?: Element;
    }

    interface PanelBarSelectEvent extends PanelBarEvent {
        item?: Element;
    }


    class PivotConfigurator extends kendo.ui.Widget {

        static fn: PivotConfigurator;

        options: PivotConfiguratorOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PivotConfigurator;

        constructor(element: Element, options?: PivotConfiguratorOptions);


        destroy(): void;
        refresh(): void;
        setDataSource(dataSource: kendo.data.PivotDataSource): void;

    }

    interface PivotConfiguratorMessagesFieldMenuOperators {
        contains?: string;
        doesnotcontain?: string;
        startswith?: string;
        endswith?: string;
        eq?: string;
        neq?: string;
    }

    interface PivotConfiguratorMessagesFieldMenu {
        info?: string;
        sortAscending?: string;
        sortDescending?: string;
        filterFields?: string;
        filter?: string;
        include?: string;
        title?: string;
        clear?: string;
        ok?: string;
        cancel?: string;
        operators?: PivotConfiguratorMessagesFieldMenuOperators;
    }

    interface PivotConfiguratorMessages {
        measures?: string;
        columns?: string;
        rows?: string;
        measuresLabel?: string;
        rowsLabel?: string;
        columnsLabel?: string;
        fieldsLabel?: string;
        fieldMenu?: PivotConfiguratorMessagesFieldMenu;
    }

    interface PivotConfiguratorSortable {
        allowUnsort?: boolean;
    }

    interface PivotConfiguratorOptions {
        name?: string;
        dataSource?: any|kendo.data.PivotDataSource;
        filterable?: boolean;
        sortable?: boolean|PivotConfiguratorSortable;
        height?: number|string;
        messages?: PivotConfiguratorMessages;
    }
    interface PivotConfiguratorEvent {
        sender: PivotConfigurator;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class PivotGrid extends kendo.ui.Widget {

        static fn: PivotGrid;

        options: PivotGridOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PivotGrid;

        constructor(element: Element, options?: PivotGridOptions);


        cellInfo(columnIndex: number, rowIndex: number): any;
        cellInfoByElement(cell: string): any;
        cellInfoByElement(cell: Element): any;
        cellInfoByElement(cell: JQuery): any;
        destroy(): void;
        refresh(): void;
        setDataSource(dataSource: kendo.data.PivotDataSource): void;
        saveAsExcel(): void;
        saveAsPDF(): JQueryPromise<any>;

    }

    interface PivotGridExcel {
        fileName?: string;
        filterable?: boolean;
        forceProxy?: boolean;
        proxyURL?: string;
    }

    interface PivotGridMessagesFieldMenuOperators {
        contains?: string;
        doesnotcontain?: string;
        startswith?: string;
        endswith?: string;
        eq?: string;
        neq?: string;
    }

    interface PivotGridMessagesFieldMenu {
        info?: string;
        sortAscending?: string;
        sortDescending?: string;
        filterFields?: string;
        filter?: string;
        include?: string;
        title?: string;
        clear?: string;
        ok?: string;
        cancel?: string;
        operators?: PivotGridMessagesFieldMenuOperators;
    }

    interface PivotGridMessages {
        measureFields?: string;
        columnFields?: string;
        rowFields?: string;
        fieldMenu?: PivotGridMessagesFieldMenu;
    }

    interface PivotGridPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface PivotGridPdf {
        author?: string;
        avoidLinks?: boolean|string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: PivotGridPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface PivotGridSortable {
        allowUnsort?: boolean;
    }

    interface PivotGridOptions {
        name?: string;
        dataSource?: any|kendo.data.PivotDataSource;
        autoBind?: boolean;
        reorderable?: boolean;
        excel?: PivotGridExcel;
        pdf?: PivotGridPdf;
        filterable?: boolean;
        sortable?: boolean|PivotGridSortable;
        columnWidth?: number;
        height?: number|string;
        columnHeaderTemplate?: string|Function;
        dataCellTemplate?: string|Function;
        kpiStatusTemplate?: string|Function;
        kpiTrendTemplate?: string|Function;
        rowHeaderTemplate?: string|Function;
        messages?: PivotGridMessages;
        dataBinding?(e: PivotGridDataBindingEvent): void;
        dataBound?(e: PivotGridDataBoundEvent): void;
        expandMember?(e: PivotGridExpandMemberEvent): void;
        collapseMember?(e: PivotGridCollapseMemberEvent): void;
        excelExport?(e: PivotGridExcelExportEvent): void;
        pdfExport?(e: PivotGridPdfExportEvent): void;
    }
    interface PivotGridEvent {
        sender: PivotGrid;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PivotGridDataBindingEvent extends PivotGridEvent {
    }

    interface PivotGridDataBoundEvent extends PivotGridEvent {
    }

    interface PivotGridExpandMemberEvent extends PivotGridEvent {
        axis?: string;
        path?: string;
    }

    interface PivotGridCollapseMemberEvent extends PivotGridEvent {
        axis?: string;
        path?: string;
    }

    interface PivotGridExcelExportEvent extends PivotGridEvent {
        data?: any;
        workbook?: any;
    }

    interface PivotGridPdfExportEvent extends PivotGridEvent {
        promise?: JQueryPromise<any>;
    }


    class Popup extends kendo.ui.Widget {

        static fn: Popup;

        options: PopupOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Popup;

        constructor(element: Element, options?: PopupOptions);


        close(): void;
        open(): void;
        position(): void;
        setOptions(options: any): void;
        visible(): boolean;

    }

    interface PopupAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface PopupAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface PopupAnimation {
        close?: PopupAnimationClose;
        open?: PopupAnimationOpen;
    }

    interface PopupOptions {
        name?: string;
        adjustSize?: any;
        animation?: boolean|PopupAnimation;
        anchor?: string|JQuery;
        appendTo?: string|JQuery;
        collision?: string;
        origin?: string;
        position?: string;
        activate?(e: PopupActivateEvent): void;
        close?(e: PopupCloseEvent): void;
        deactivate?(e: PopupDeactivateEvent): void;
        open?(e: PopupOpenEvent): void;
    }
    interface PopupEvent {
        sender: Popup;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PopupActivateEvent extends PopupEvent {
    }

    interface PopupCloseEvent extends PopupEvent {
    }

    interface PopupDeactivateEvent extends PopupEvent {
    }

    interface PopupOpenEvent extends PopupEvent {
    }


    class ProgressBar extends kendo.ui.Widget {

        static fn: ProgressBar;

        options: ProgressBarOptions;

        progressStatus: JQuery;
        progressWrapper: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ProgressBar;

        constructor(element: Element, options?: ProgressBarOptions);


        enable(enable: boolean): void;
        value(): number;
        value(value: number): void;

    }

    interface ProgressBarAnimation {
        duration?: number;
    }

    interface ProgressBarOptions {
        name?: string;
        animation?: ProgressBarAnimation;
        chunkCount?: number;
        enable?: boolean;
        max?: number;
        min?: number;
        orientation?: string;
        reverse?: boolean;
        showStatus?: boolean;
        type?: string;
        value?: number;
        change?(e: ProgressBarChangeEvent): void;
        complete?(e: ProgressBarCompleteEvent): void;
    }
    interface ProgressBarEvent {
        sender: ProgressBar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ProgressBarChangeEvent extends ProgressBarEvent {
        value?: number;
    }

    interface ProgressBarCompleteEvent extends ProgressBarEvent {
        value?: number;
    }


    class Prompt extends kendo.ui.Dialog {

        static fn: Prompt;

        options: PromptOptions;

        result: JQueryPromise<any>;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Prompt;

        constructor(element: Element, options?: PromptOptions);



    }

    interface PromptMessages {
        okText?: string;
        cancel?: string;
    }

    interface PromptOptions {
        name?: string;
        messages?: PromptMessages;
    }
    interface PromptEvent {
        sender: Prompt;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class RangeSlider extends kendo.ui.Widget {

        static fn: RangeSlider;

        options: RangeSliderOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): RangeSlider;

        constructor(element: Element, options?: RangeSliderOptions);


        destroy(): void;
        enable(enable: boolean): void;
        value(): any;
        value(selectionStart: number, selectionEnd: number): void;
        resize(): void;

    }

    interface RangeSliderTooltip {
        enabled?: boolean;
        format?: string;
        template?: string;
    }

    interface RangeSliderOptions {
        name?: string;
        largeStep?: number;
        leftDragHandleTitle?: string;
        max?: number;
        min?: number;
        orientation?: string;
        rightDragHandleTitle?: string;
        selectionEnd?: number;
        selectionStart?: number;
        smallStep?: number;
        tickPlacement?: string;
        tooltip?: RangeSliderTooltip;
        change?(e: RangeSliderChangeEvent): void;
        slide?(e: RangeSliderSlideEvent): void;
    }
    interface RangeSliderEvent {
        sender: RangeSlider;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface RangeSliderChangeEvent extends RangeSliderEvent {
        value?: any;
    }

    interface RangeSliderSlideEvent extends RangeSliderEvent {
        value?: any;
    }


    class ResponsivePanel extends kendo.ui.Widget {

        static fn: ResponsivePanel;

        options: ResponsivePanelOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ResponsivePanel;

        constructor(element: Element, options?: ResponsivePanelOptions);


        close(): void;
        destroy(): void;
        open(): void;

    }

    interface ResponsivePanelOptions {
        name?: string;
        autoClose?: boolean;
        breakpoint?: number;
        orientation?: string;
        toggleButton?: string;
        close?(e: ResponsivePanelEvent): void;
        open?(e: ResponsivePanelEvent): void;
    }
    interface ResponsivePanelEvent {
        sender: ResponsivePanel;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Scheduler extends kendo.ui.Widget {

        static fn: Scheduler;

        options: SchedulerOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Scheduler;

        constructor(element: Element, options?: SchedulerOptions);


        addEvent(data: any): void;
        cancelEvent(): void;
        data(): void;
        date(): Date;
        date(value?: Date): void;
        destroy(): void;
        editEvent(event: string): void;
        editEvent(event: kendo.data.SchedulerEvent): void;
        items(): any;
        occurrenceByUid(uid: string): kendo.data.SchedulerEvent;
        occurrencesInRange(start: Date, end: Date): any;
        refresh(): void;
        removeEvent(event: string): void;
        removeEvent(event: kendo.data.SchedulerEvent): void;
        resourcesBySlot(slot: any): any;
        saveAsPDF(): JQueryPromise<any>;
        saveEvent(): void;
        select(): void;
        select(events: any, options: any): void;
        setDataSource(dataSource: kendo.data.SchedulerDataSource): void;
        slotByPosition(xPosition: number, yPosition: number): any;
        slotByElement(element: Element): any;
        slotByElement(element: JQuery): any;
        view(type?: string): void;
        viewName(): string;

    }

    interface SchedulerCurrentTimeMarker {
        updateInterval?: number;
        useLocalTimezone?: boolean;
    }

    interface SchedulerEditable {
        confirmation?: boolean|string;
        create?: boolean;
        destroy?: boolean;
        editRecurringMode?: string;
        move?: boolean;
        resize?: boolean;
        template?: string|Function;
        update?: boolean;
        window?: any;
    }

    interface SchedulerFooter {
        command?: string|boolean;
    }

    interface SchedulerGroup {
        date?: boolean;
        resources?: any;
        orientation?: string;
    }

    interface SchedulerMessagesEditable {
        confirmation?: string;
    }

    interface SchedulerMessagesEditor {
        allDayEvent?: string;
        description?: string;
        editorTitle?: string;
        end?: string;
        endTimezone?: string;
        repeat?: string;
        separateTimezones?: string;
        start?: string;
        startTimezone?: string;
        timezone?: string;
        timezoneEditorButton?: string;
        timezoneEditorTitle?: string;
        title?: string;
    }

    interface SchedulerMessagesRecurrenceEditorDaily {
        interval?: string;
        repeatEvery?: string;
    }

    interface SchedulerMessagesRecurrenceEditorEnd {
        after?: string;
        occurrence?: string;
        label?: string;
        never?: string;
        mobileLabel?: string;
        on?: string;
    }

    interface SchedulerMessagesRecurrenceEditorFrequencies {
        daily?: string;
        monthly?: string;
        never?: string;
        weekly?: string;
        yearly?: string;
    }

    interface SchedulerMessagesRecurrenceEditorMonthly {
        day?: string;
        interval?: string;
        repeatEvery?: string;
        repeatOn?: string;
    }

    interface SchedulerMessagesRecurrenceEditorOffsetPositions {
        first?: string;
        second?: string;
        third?: string;
        fourth?: string;
        last?: string;
    }

    interface SchedulerMessagesRecurrenceEditorWeekdays {
        day?: string;
        weekday?: string;
        weekend?: string;
    }

    interface SchedulerMessagesRecurrenceEditorWeekly {
        interval?: string;
        repeatEvery?: string;
        repeatOn?: string;
    }

    interface SchedulerMessagesRecurrenceEditorYearly {
        of?: string;
        repeatEvery?: string;
        repeatOn?: string;
        interval?: string;
    }

    interface SchedulerMessagesRecurrenceEditor {
        daily?: SchedulerMessagesRecurrenceEditorDaily;
        end?: SchedulerMessagesRecurrenceEditorEnd;
        frequencies?: SchedulerMessagesRecurrenceEditorFrequencies;
        monthly?: SchedulerMessagesRecurrenceEditorMonthly;
        offsetPositions?: SchedulerMessagesRecurrenceEditorOffsetPositions;
        weekly?: SchedulerMessagesRecurrenceEditorWeekly;
        weekdays?: SchedulerMessagesRecurrenceEditorWeekdays;
        yearly?: SchedulerMessagesRecurrenceEditorYearly;
    }

    interface SchedulerMessagesRecurrenceMessages {
        deleteRecurring?: string;
        deleteWindowOccurrence?: string;
        deleteWindowSeries?: string;
        deleteWindowTitle?: string;
        editRecurring?: string;
        editWindowOccurrence?: string;
        editWindowSeries?: string;
        editWindowTitle?: string;
    }

    interface SchedulerMessagesViews {
        day?: string;
        week?: string;
        month?: string;
        agenda?: string;
    }

    interface SchedulerMessages {
        allDay?: string;
        ariaEventLabel?: string;
        ariaSlotLabel?: string;
        cancel?: string;
        date?: string;
        deleteWindowTitle?: string;
        destroy?: string;
        event?: string;
        defaultRowText?: string;
        pdf?: string;
        save?: string;
        showFullDay?: string;
        showWorkDay?: string;
        time?: string;
        today?: string;
        editable?: SchedulerMessagesEditable;
        editor?: SchedulerMessagesEditor;
        recurrenceEditor?: SchedulerMessagesRecurrenceEditor;
        recurrenceMessages?: SchedulerMessagesRecurrenceMessages;
        views?: SchedulerMessagesViews;
    }

    interface SchedulerPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface SchedulerPdf {
        author?: string;
        avoidLinks?: boolean|string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: SchedulerPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface SchedulerResource {
        dataColorField?: string;
        dataSource?: any|any|kendo.data.DataSource;
        dataTextField?: string;
        dataValueField?: string;
        field?: string;
        multiple?: boolean;
        name?: string;
        title?: string;
        valuePrimitive?: boolean;
    }

    interface SchedulerToolbarItem {
        name?: string;
    }

    interface SchedulerViewEditable {
        create?: boolean;
        destroy?: boolean;
        update?: boolean;
    }

    interface SchedulerViewGroup {
        date?: boolean;
        orientation?: string;
    }

    interface SchedulerView {
        allDayEventTemplate?: string|Function;
        allDaySlot?: boolean;
        allDaySlotTemplate?: string|Function;
        columnWidth?: number;
        dateHeaderTemplate?: string|Function;
        dayTemplate?: string|Function;
        editable?: boolean|SchedulerViewEditable;
        endTime?: Date;
        eventHeight?: number;
        eventTemplate?: string|Function;
        eventTimeTemplate?: string|Function;
        group?: SchedulerViewGroup;
        majorTick?: number;
        majorTimeHeaderTemplate?: string|Function;
        minorTickCount?: number;
        minorTimeHeaderTemplate?: string|Function;
        selected?: boolean;
        selectedDateFormat?: string;
        selectedShortDateFormat?: string;
        showWorkHours?: boolean;
        slotTemplate?: string|Function;
        startTime?: Date;
        title?: string;
        type?: string;
        workWeekStart?: number;
        workWeekEnd?: number;
    }

    interface SchedulerSelectOptions {
        events?: any;
        resources?: any;
        start?: Date;
        end?: Date;
        isAllDay?: boolean;
    }

    interface SchedulerOptions {
        name?: string;
        allDayEventTemplate?: string|Function;
        allDaySlot?: boolean;
        autoBind?: boolean;
        currentTimeMarker?: boolean|SchedulerCurrentTimeMarker;
        dataSource?: any|any|kendo.data.SchedulerDataSource;
        date?: Date;
        dateHeaderTemplate?: string|Function;
        editable?: boolean|SchedulerEditable;
        endTime?: Date;
        eventTemplate?: string|Function;
        footer?: boolean|SchedulerFooter;
        group?: SchedulerGroup;
        groupHeaderTemplate?: string|Function;
        height?: number|string;
        majorTick?: number;
        majorTimeHeaderTemplate?: string|Function;
        max?: Date;
        messages?: SchedulerMessages;
        min?: Date;
        minorTickCount?: number;
        minorTimeHeaderTemplate?: string|Function;
        mobile?: boolean|string;
        pdf?: SchedulerPdf;
        resources?: SchedulerResource[];
        selectable?: boolean;
        showWorkHours?: boolean;
        snap?: boolean;
        startTime?: Date;
        timezone?: string;
        toolbar?: SchedulerToolbarItem[];
        views?: SchedulerView[];
        width?: number|string;
        workDayStart?: Date;
        workDayEnd?: Date;
        workWeekStart?: number;
        workWeekEnd?: number;
        add?(e: SchedulerAddEvent): void;
        cancel?(e: SchedulerCancelEvent): void;
        change?(e: SchedulerChangeEvent): void;
        dataBinding?(e: SchedulerDataBindingEvent): void;
        dataBound?(e: SchedulerDataBoundEvent): void;
        edit?(e: SchedulerEditEvent): void;
        moveStart?(e: SchedulerMoveStartEvent): void;
        move?(e: SchedulerMoveEvent): void;
        moveEnd?(e: SchedulerMoveEndEvent): void;
        navigate?(e: SchedulerNavigateEvent): void;
        pdfExport?(e: SchedulerPdfExportEvent): void;
        remove?(e: SchedulerRemoveEvent): void;
        resizeStart?(e: SchedulerResizeStartEvent): void;
        resize?(e: SchedulerResizeEvent): void;
        resizeEnd?(e: SchedulerResizeEndEvent): void;
        save?(e: SchedulerSaveEvent): void;
    }
    interface SchedulerEvent {
        sender: Scheduler;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SchedulerAddEvent extends SchedulerEvent {
        event?: any;
    }

    interface SchedulerCancelEvent extends SchedulerEvent {
        container?: JQuery;
        event?: kendo.data.SchedulerEvent;
    }

    interface SchedulerChangeEvent extends SchedulerEvent {
        start?: Date;
        end?: Date;
        events?: any;
        slots?: any;
        resources?: any;
    }

    interface SchedulerDataBindingEvent extends SchedulerEvent {
    }

    interface SchedulerDataBoundEvent extends SchedulerEvent {
    }

    interface SchedulerEditEvent extends SchedulerEvent {
        container?: JQuery;
        event?: kendo.data.SchedulerEvent;
    }

    interface SchedulerMoveStartEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent;
    }

    interface SchedulerMoveEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent;
        slot?: any;
    }

    interface SchedulerMoveEndEvent extends SchedulerEvent {
        start?: Date;
        end?: Date;
        event?: kendo.data.SchedulerEvent;
        slot?: any;
        resources?: any;
    }

    interface SchedulerNavigateEvent extends SchedulerEvent {
        action?: string;
        date?: Date;
        view?: string;
    }

    interface SchedulerPdfExportEvent extends SchedulerEvent {
        promise?: JQueryPromise<any>;
    }

    interface SchedulerRemoveEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent;
    }

    interface SchedulerResizeStartEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent;
    }

    interface SchedulerResizeEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent;
        slot?: any;
    }

    interface SchedulerResizeEndEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent;
        slot?: any;
    }

    interface SchedulerSaveEvent extends SchedulerEvent {
        container?: JQuery;
        event?: kendo.data.SchedulerEvent;
    }


    class Slider extends kendo.ui.Widget {

        static fn: Slider;

        options: SliderOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Slider;

        constructor(element: Element, options?: SliderOptions);


        destroy(): void;
        enable(enable: boolean): void;
        value(): number;
        value(value: number): void;
        resize(): void;

    }

    interface SliderTooltip {
        enabled?: boolean;
        format?: string;
        template?: string;
    }

    interface SliderOptions {
        name?: string;
        decreaseButtonTitle?: string;
        dragHandleTitle?: string;
        increaseButtonTitle?: string;
        largeStep?: number;
        max?: number;
        min?: number;
        orientation?: string;
        showButtons?: boolean;
        smallStep?: number;
        tickPlacement?: string;
        tooltip?: SliderTooltip;
        value?: number;
        change?(e: SliderChangeEvent): void;
        slide?(e: SliderSlideEvent): void;
    }
    interface SliderEvent {
        sender: Slider;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SliderChangeEvent extends SliderEvent {
        value?: number;
    }

    interface SliderSlideEvent extends SliderEvent {
        value?: number;
    }


    class Sortable extends kendo.ui.Widget {

        static fn: Sortable;

        options: SortableOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Sortable;

        constructor(element: Element, options?: SortableOptions);


        indexOf(element: JQuery): number;
        items(): JQuery;

    }

    interface SortableCursorOffset {
        left?: number;
        top?: number;
    }

    interface SortableOptions {
        name?: string;
        axis?: string;
        autoScroll?: boolean;
        container?: string|JQuery;
        connectWith?: string;
        cursor?: string;
        cursorOffset?: SortableCursorOffset;
        disabled?: string;
        filter?: string;
        handler?: string;
        hint?: Function|string|JQuery;
        holdToDrag?: boolean;
        ignore?: string;
        placeholder?: Function|string|JQuery;
        start?(e: SortableStartEvent): void;
        move?(e: SortableMoveEvent): void;
        end?(e: SortableEndEvent): void;
        change?(e: SortableChangeEvent): void;
        cancel?(e: SortableCancelEvent): void;
    }
    interface SortableEvent {
        sender: Sortable;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SortableStartEvent extends SortableEvent {
        draggableEvent?: any;
        item?: JQuery;
    }

    interface SortableMoveEvent extends SortableEvent {
        item?: JQuery;
        target?: JQuery;
        list?: kendo.ui.Sortable;
        draggableEvent?: any;
    }

    interface SortableEndEvent extends SortableEvent {
        action?: string;
        item?: JQuery;
        oldIndex?: number;
        newIndex?: number;
        draggableEvent?: any;
    }

    interface SortableChangeEvent extends SortableEvent {
        action?: string;
        item?: JQuery;
        oldIndex?: number;
        newIndex?: number;
        draggableEvent?: any;
    }

    interface SortableCancelEvent extends SortableEvent {
        item?: JQuery;
    }


    class Splitter extends kendo.ui.Widget {

        static fn: Splitter;

        options: SplitterOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Splitter;

        constructor(element: Element, options?: SplitterOptions);


        ajaxRequest(pane: string, url: string, data: any): void;
        ajaxRequest(pane: string, url: string, data: string): void;
        ajaxRequest(pane: Element, url: string, data: any): void;
        ajaxRequest(pane: Element, url: string, data: string): void;
        ajaxRequest(pane: JQuery, url: string, data: any): void;
        ajaxRequest(pane: JQuery, url: string, data: string): void;
        append(config?: any): JQuery;
        collapse(pane: string): void;
        collapse(pane: Element): void;
        collapse(pane: JQuery): void;
        destroy(): void;
        expand(pane: string): void;
        expand(pane: Element): void;
        expand(pane: JQuery): void;
        insertAfter(config: any, referencePane: string): JQuery;
        insertAfter(config: any, referencePane: Element): JQuery;
        insertAfter(config: any, referencePane: JQuery): JQuery;
        insertBefore(config: any, referencePane: string): JQuery;
        insertBefore(config: any, referencePane: Element): JQuery;
        insertBefore(config: any, referencePane: JQuery): JQuery;
        max(pane: string, value: string): void;
        max(pane: Element, value: string): void;
        max(pane: JQuery, value: string): void;
        min(pane: string, value: string): void;
        min(pane: Element, value: string): void;
        min(pane: JQuery, value: string): void;
        remove(pane: string): void;
        remove(pane: Element): void;
        remove(pane: JQuery): void;
        size(pane: string): any;
        size(pane: Element): any;
        size(pane: JQuery): any;
        size(pane: string, value?: string): void;
        size(pane: Element, value?: string): void;
        size(pane: JQuery, value?: string): void;
        toggle(pane: string, expand?: boolean): void;
        toggle(pane: Element, expand?: boolean): void;
        toggle(pane: JQuery, expand?: boolean): void;

    }

    interface SplitterPane {
        collapsed?: boolean;
        collapsedSize?: string;
        collapsible?: boolean;
        contentUrl?: string;
        max?: string;
        min?: string;
        resizable?: boolean;
        scrollable?: boolean;
        size?: string;
    }

    interface SplitterOptions {
        name?: string;
        orientation?: string;
        panes?: SplitterPane[];
        collapse?(e: SplitterCollapseEvent): void;
        contentLoad?(e: SplitterContentLoadEvent): void;
        error?(e: SplitterErrorEvent): void;
        expand?(e: SplitterExpandEvent): void;
        layoutChange?(e: SplitterEvent): void;
        resize?(e: SplitterEvent): void;
    }
    interface SplitterEvent {
        sender: Splitter;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SplitterCollapseEvent extends SplitterEvent {
        pane?: Element;
    }

    interface SplitterContentLoadEvent extends SplitterEvent {
        pane?: Element;
    }

    interface SplitterErrorEvent extends SplitterEvent {
        xhr?: JQueryXHR;
        status?: string;
    }

    interface SplitterExpandEvent extends SplitterEvent {
        pane?: Element;
    }


    class Spreadsheet extends kendo.ui.Widget {

        static fn: Spreadsheet;

        options: SpreadsheetOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Spreadsheet;

        constructor(element: Element, options?: SpreadsheetOptions);


        activeSheet(): kendo.spreadsheet.Sheet;
        activeSheet(sheet?: kendo.spreadsheet.Sheet): void;
        sheets(): any;
        fromFile(blob: Blob): JQueryPromise<any>;
        fromFile(blob: File): JQueryPromise<any>;
        saveAsExcel(): void;
        saveAsPDF(): JQueryPromise<any>;
        sheetByName(name: string): kendo.spreadsheet.Sheet;
        sheetIndex(sheet: kendo.spreadsheet.Sheet): number;
        sheetByIndex(index: number): kendo.spreadsheet.Sheet;
        insertSheet(options: any): kendo.spreadsheet.Sheet;
        moveSheetToIndex(sheet: kendo.spreadsheet.Sheet, index: number): void;
        removeSheet(sheet: kendo.spreadsheet.Sheet): void;
        renameSheet(sheet: kendo.spreadsheet.Sheet, newSheetName: string): kendo.spreadsheet.Sheet;
        toJSON(): any;
        fromJSON(data: any): void;
        defineName(name: string, value: string, hidden: boolean): void;
        undefineName(name: string): void;

    }

    interface SpreadsheetExcel {
        fileName?: string;
        forceProxy?: boolean;
        proxyURL?: string;
    }

    interface SpreadsheetPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface SpreadsheetPdf {
        area?: string;
        author?: string;
        creator?: string;
        date?: Date;
        fileName?: string;
        fitWidth?: boolean;
        forceProxy?: boolean;
        guidelines?: boolean;
        hCenter?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: SpreadsheetPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
        vCenter?: boolean;
    }

    interface SpreadsheetSheetColumn {
        index?: number;
        width?: number;
    }

    interface SpreadsheetSheetFilterColumnCriteriaItem {
        operator?: string;
        value?: string;
    }

    interface SpreadsheetSheetFilterColumn {
        criteria?: SpreadsheetSheetFilterColumnCriteriaItem[];
        filter?: string;
        index?: number;
        logic?: string;
        type?: string;
        value?: number|string|Date;
        values?: any;
    }

    interface SpreadsheetSheetFilter {
        columns?: SpreadsheetSheetFilterColumn[];
        ref?: string;
    }

    interface SpreadsheetSheetRowCellBorderBottom {
        color?: string;
        size?: string;
    }

    interface SpreadsheetSheetRowCellBorderLeft {
        color?: string;
        size?: string;
    }

    interface SpreadsheetSheetRowCellBorderRight {
        color?: string;
        size?: string;
    }

    interface SpreadsheetSheetRowCellBorderTop {
        color?: string;
        size?: string;
    }

    interface SpreadsheetSheetRowCellValidation {
        type?: string;
        comparerType?: string;
        dataType?: string;
        from?: string;
        showButton?: boolean;
        to?: string;
        allowNulls?: boolean;
        messageTemplate?: string;
        titleTemplate?: string;
    }

    interface SpreadsheetSheetRowCell {
        background?: string;
        borderBottom?: SpreadsheetSheetRowCellBorderBottom;
        borderLeft?: SpreadsheetSheetRowCellBorderLeft;
        borderTop?: SpreadsheetSheetRowCellBorderTop;
        borderRight?: SpreadsheetSheetRowCellBorderRight;
        color?: string;
        fontFamily?: string;
        fontSize?: number;
        italic?: boolean;
        bold?: boolean;
        enable?: boolean;
        format?: string;
        formula?: string;
        index?: number;
        link?: string;
        textAlign?: string;
        underline?: boolean;
        value?: number|string|boolean|Date;
        validation?: SpreadsheetSheetRowCellValidation;
        verticalAlign?: string;
        wrap?: boolean;
    }

    interface SpreadsheetSheetRow {
        cells?: SpreadsheetSheetRowCell[];
        height?: number;
        index?: number;
        type?: string;
    }

    interface SpreadsheetSheetSortColumn {
        ascending?: boolean;
        index?: number;
    }

    interface SpreadsheetSheetSort {
        columns?: SpreadsheetSheetSortColumn[];
        ref?: string;
    }

    interface SpreadsheetSheet {
        activeCell?: string;
        name?: string;
        columns?: SpreadsheetSheetColumn[];
        dataSource?: kendo.data.DataSource;
        filter?: SpreadsheetSheetFilter;
        frozenColumns?: number;
        frozenRows?: number;
        mergedCells?: any;
        rows?: SpreadsheetSheetRow[];
        selection?: string;
        showGridLines?: boolean;
        sort?: SpreadsheetSheetSort;
    }

    interface SpreadsheetToolbar {
        home?: boolean|any;
        insert?: boolean|any;
        data?: boolean|any;
    }

    interface SpreadsheetInsertSheetOptions {
        rows?: number;
        columns?: number;
        rowHeight?: number;
        columnWidth?: number;
        headerHeight?: number;
        headerWidth?: number;
        dataSource?: kendo.data.DataSource;
        data?: any;
    }

    interface SpreadsheetOptions {
        name?: string;
        activeSheet?: string;
        columnWidth?: number;
        columns?: number;
        headerHeight?: number;
        headerWidth?: number;
        excel?: SpreadsheetExcel;
        pdf?: SpreadsheetPdf;
        rowHeight?: number;
        rows?: number;
        sheets?: SpreadsheetSheet[];
        sheetsbar?: boolean;
        toolbar?: boolean|SpreadsheetToolbar;
        change?(e: SpreadsheetChangeEvent): void;
        render?(e: SpreadsheetRenderEvent): void;
        excelExport?(e: SpreadsheetExcelExportEvent): void;
        excelImport?(e: SpreadsheetExcelImportEvent): void;
        pdfExport?(e: SpreadsheetPdfExportEvent): void;
    }
    interface SpreadsheetEvent {
        sender: Spreadsheet;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SpreadsheetChangeEvent extends SpreadsheetEvent {
        range?: kendo.spreadsheet.Range;
    }

    interface SpreadsheetRenderEvent extends SpreadsheetEvent {
    }

    interface SpreadsheetExcelExportEvent extends SpreadsheetEvent {
        data?: any;
        workbook?: kendo.ooxml.Workbook;
    }

    interface SpreadsheetExcelImportEvent extends SpreadsheetEvent {
        file?: Blob|File;
        progress?: JQueryPromise<any>;
    }

    interface SpreadsheetPdfExportEvent extends SpreadsheetEvent {
        promise?: JQueryPromise<any>;
    }


    class TabStrip extends kendo.ui.Widget {

        static fn: TabStrip;

        options: TabStripOptions;

        dataSource: kendo.data.DataSource;
        tabGroup: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TabStrip;

        constructor(element: Element, options?: TabStripOptions);


        activateTab(item: JQuery): void;
        append(tab: any): kendo.ui.TabStrip;
        contentElement(itemIndex: number): Element;
        contentHolder(itemIndex: number): Element;
        deactivateTab(item: JQuery): void;
        destroy(): void;
        disable(element: string): kendo.ui.TabStrip;
        disable(element: Element): kendo.ui.TabStrip;
        disable(element: JQuery): kendo.ui.TabStrip;
        enable(element: string, enable?: boolean): kendo.ui.TabStrip;
        enable(element: Element, enable?: boolean): kendo.ui.TabStrip;
        enable(element: JQuery, enable?: boolean): kendo.ui.TabStrip;
        insertAfter(item: any, referenceTab: string): kendo.ui.TabStrip;
        insertAfter(item: any, referenceTab: Element): kendo.ui.TabStrip;
        insertAfter(item: any, referenceTab: JQuery): kendo.ui.TabStrip;
        insertAfter(item: string, referenceTab: string): kendo.ui.TabStrip;
        insertAfter(item: string, referenceTab: Element): kendo.ui.TabStrip;
        insertAfter(item: string, referenceTab: JQuery): kendo.ui.TabStrip;
        insertAfter(item: Element, referenceTab: string): kendo.ui.TabStrip;
        insertAfter(item: Element, referenceTab: Element): kendo.ui.TabStrip;
        insertAfter(item: Element, referenceTab: JQuery): kendo.ui.TabStrip;
        insertAfter(item: JQuery, referenceTab: string): kendo.ui.TabStrip;
        insertAfter(item: JQuery, referenceTab: Element): kendo.ui.TabStrip;
        insertAfter(item: JQuery, referenceTab: JQuery): kendo.ui.TabStrip;
        insertBefore(item: any, referenceTab: string): kendo.ui.TabStrip;
        insertBefore(item: any, referenceTab: Element): kendo.ui.TabStrip;
        insertBefore(item: any, referenceTab: JQuery): kendo.ui.TabStrip;
        insertBefore(item: string, referenceTab: string): kendo.ui.TabStrip;
        insertBefore(item: string, referenceTab: Element): kendo.ui.TabStrip;
        insertBefore(item: string, referenceTab: JQuery): kendo.ui.TabStrip;
        insertBefore(item: Element, referenceTab: string): kendo.ui.TabStrip;
        insertBefore(item: Element, referenceTab: Element): kendo.ui.TabStrip;
        insertBefore(item: Element, referenceTab: JQuery): kendo.ui.TabStrip;
        insertBefore(item: JQuery, referenceTab: string): kendo.ui.TabStrip;
        insertBefore(item: JQuery, referenceTab: Element): kendo.ui.TabStrip;
        insertBefore(item: JQuery, referenceTab: JQuery): kendo.ui.TabStrip;
        items(): HTMLCollection;
        reload(element: string): kendo.ui.TabStrip;
        reload(element: Element): kendo.ui.TabStrip;
        reload(element: JQuery): kendo.ui.TabStrip;
        remove(element: string): kendo.ui.TabStrip;
        remove(element: number): kendo.ui.TabStrip;
        remove(element: JQuery): kendo.ui.TabStrip;
        select(): JQuery;
        select(element: string): void;
        select(element: Element): void;
        select(element: JQuery): void;
        select(element: number): void;
        setDataSource(dataSource: any): void;
        setDataSource(dataSource: kendo.data.DataSource): void;

    }

    interface TabStripAnimationClose {
        duration?: number;
        effects?: string;
    }

    interface TabStripAnimationOpen {
        duration?: number;
        effects?: string;
    }

    interface TabStripAnimation {
        close?: TabStripAnimationClose;
        open?: TabStripAnimationOpen;
    }

    interface TabStripScrollable {
        distance?: number;
    }

    interface TabStripOptions {
        name?: string;
        animation?: boolean|TabStripAnimation;
        collapsible?: boolean;
        contentUrls?: any;
        dataContentField?: string;
        dataContentUrlField?: string;
        dataImageUrlField?: string;
        dataSource?: any|any|kendo.data.DataSource;
        dataSpriteCssClass?: string;
        dataTextField?: string;
        dataUrlField?: string;
        navigatable?: boolean;
        scrollable?: boolean|TabStripScrollable;
        tabPosition?: string;
        value?: string;
        activate?(e: TabStripActivateEvent): void;
        contentLoad?(e: TabStripContentLoadEvent): void;
        error?(e: TabStripErrorEvent): void;
        select?(e: TabStripSelectEvent): void;
        show?(e: TabStripShowEvent): void;
    }
    interface TabStripEvent {
        sender: TabStrip;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TabStripActivateEvent extends TabStripEvent {
        item?: Element;
        contentElement?: Element;
    }

    interface TabStripContentLoadEvent extends TabStripEvent {
        item?: Element;
        contentElement?: Element;
    }

    interface TabStripErrorEvent extends TabStripEvent {
        xhr?: JQueryXHR;
        status?: string;
    }

    interface TabStripSelectEvent extends TabStripEvent {
        item?: Element;
        contentElement?: Element;
    }

    interface TabStripShowEvent extends TabStripEvent {
        item?: Element;
        contentElement?: Element;
    }


    class TimePicker extends kendo.ui.Widget {

        static fn: TimePicker;

        options: TimePickerOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TimePicker;

        constructor(element: Element, options?: TimePickerOptions);


        close(): void;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        max(): Date;
        max(value: Date): void;
        max(value: string): void;
        min(): Date;
        min(value: Date): void;
        min(value: string): void;
        open(): void;
        setOptions(options: any): void;
        value(): Date;
        value(value: Date): void;
        value(value: string): void;

    }

    interface TimePickerAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface TimePickerAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface TimePickerAnimation {
        close?: TimePickerAnimationClose;
        open?: TimePickerAnimationOpen;
    }

    interface TimePickerOptions {
        name?: string;
        animation?: boolean|TimePickerAnimation;
        culture?: string;
        dates?: any;
        format?: string;
        interval?: number;
        max?: Date;
        min?: Date;
        parseFormats?: any;
        value?: Date;
        change?(e: TimePickerChangeEvent): void;
        close?(e: TimePickerCloseEvent): void;
        open?(e: TimePickerOpenEvent): void;
    }
    interface TimePickerEvent {
        sender: TimePicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TimePickerChangeEvent extends TimePickerEvent {
    }

    interface TimePickerCloseEvent extends TimePickerEvent {
    }

    interface TimePickerOpenEvent extends TimePickerEvent {
    }


    class ToolBar extends kendo.ui.Widget {

        static fn: ToolBar;

        options: ToolBarOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ToolBar;

        constructor(element: Element, options?: ToolBarOptions);


        add(command: any): void;
        destroy(): void;
        enable(command: string, enable: boolean): void;
        enable(command: Element, enable: boolean): void;
        enable(command: JQuery, enable: boolean): void;
        getSelectedFromGroup(groupName: string): void;
        hide(command: string): void;
        hide(command: Element): void;
        hide(command: JQuery): void;
        remove(command: string): void;
        remove(command: Element): void;
        remove(command: JQuery): void;
        show(command: string): void;
        show(command: Element): void;
        show(command: JQuery): void;
        toggle(command: string, state: boolean): void;
        toggle(command: Element, state: boolean): void;
        toggle(command: JQuery, state: boolean): void;

    }

    interface ToolBarItemButton {
        attributes?: any;
        click?: Function;
        enable?: boolean;
        group?: string;
        hidden?: boolean;
        icon?: string;
        id?: string;
        imageUrl?: string;
        selected?: boolean;
        showIcon?: string;
        showText?: string;
        spriteCssClass?: string;
        toggle?: Function;
        togglable?: boolean;
        text?: string;
        url?: string;
    }

    interface ToolBarItemMenuButton {
        attributes?: any;
        enable?: boolean;
        hidden?: boolean;
        icon?: string;
        id?: string;
        imageUrl?: string;
        spriteCssClass?: string;
        text?: string;
        url?: string;
    }

    interface ToolBarItem {
        attributes?: any;
        buttons?: ToolBarItemButton[];
        click?: Function;
        enable?: boolean;
        group?: string;
        hidden?: boolean;
        icon?: string;
        id?: string;
        imageUrl?: string;
        menuButtons?: ToolBarItemMenuButton[];
        overflow?: string;
        overflowTemplate?: string|Function;
        primary?: boolean;
        selected?: boolean;
        showIcon?: string;
        showText?: string;
        spriteCssClass?: string;
        template?: string|Function;
        text?: string;
        togglable?: boolean;
        toggle?: Function;
        type?: string;
        url?: string;
    }

    interface ToolBarOptions {
        name?: string;
        resizable?: boolean;
        items?: ToolBarItem[];
        click?(e: ToolBarClickEvent): void;
        close?(e: ToolBarCloseEvent): void;
        open?(e: ToolBarOpenEvent): void;
        toggle?(e: ToolBarToggleEvent): void;
        overflowClose?(e: ToolBarOverflowCloseEvent): void;
        overflowOpen?(e: ToolBarOverflowOpenEvent): void;
    }
    interface ToolBarEvent {
        sender: ToolBar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ToolBarClickEvent extends ToolBarEvent {
        target?: JQuery;
        id?: string;
    }

    interface ToolBarCloseEvent extends ToolBarEvent {
        SplitButton?: JQuery;
    }

    interface ToolBarOpenEvent extends ToolBarEvent {
        SplitButton?: JQuery;
    }

    interface ToolBarToggleEvent extends ToolBarEvent {
        target?: JQuery;
        checked?: boolean;
        id?: string;
    }

    interface ToolBarOverflowCloseEvent extends ToolBarEvent {
    }

    interface ToolBarOverflowOpenEvent extends ToolBarEvent {
    }


    class Tooltip extends kendo.ui.Widget {

        static fn: Tooltip;

        options: TooltipOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Tooltip;

        constructor(element: Element, options?: TooltipOptions);


        show(element: JQuery): void;
        hide(): void;
        refresh(): void;
        target(): JQuery;

    }

    interface TooltipAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface TooltipAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface TooltipAnimation {
        close?: TooltipAnimationClose;
        open?: TooltipAnimationOpen;
    }

    interface TooltipContent {
        url?: string;
    }

    interface TooltipOptions {
        name?: string;
        autoHide?: boolean;
        animation?: boolean|TooltipAnimation;
        content?: TooltipContent;
        callout?: boolean;
        filter?: string;
        iframe?: boolean;
        height?: number;
        width?: number;
        position?: string;
        showAfter?: number;
        showOn?: string;
        contentLoad?(e: TooltipEvent): void;
        show?(e: TooltipEvent): void;
        hide?(e: TooltipEvent): void;
        requestStart?(e: TooltipRequestStartEvent): void;
        error?(e: TooltipErrorEvent): void;
    }
    interface TooltipEvent {
        sender: Tooltip;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TooltipRequestStartEvent extends TooltipEvent {
        target?: JQuery;
        options?: any;
    }

    interface TooltipErrorEvent extends TooltipEvent {
        xhr?: JQueryXHR;
        status?: string;
    }


    class TreeList extends kendo.ui.Widget {

        static fn: TreeList;

        options: TreeListOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TreeList;

        constructor(element: Element, options?: TreeListOptions);


        addRow(parentRow: string): void;
        addRow(parentRow: Element): void;
        addRow(parentRow: JQuery): void;
        autoFitColumn(column: number): void;
        autoFitColumn(column: string): void;
        autoFitColumn(column: any): void;
        cancelRow(): void;
        clearSelection(): void;
        collapse(): void;
        dataItem(row: string): kendo.data.TreeListModel;
        dataItem(row: Element): kendo.data.TreeListModel;
        dataItem(row: JQuery): kendo.data.TreeListModel;
        destroy(): void;
        editRow(row: JQuery): void;
        expand(row: string): JQueryPromise<any>;
        expand(row: Element): JQueryPromise<any>;
        expand(row: JQuery): JQueryPromise<any>;
        itemFor(model: kendo.data.TreeListModel): JQuery;
        itemFor(model: any): JQuery;
        items(): any;
        refresh(): void;
        removeRow(row: string): void;
        removeRow(row: Element): void;
        removeRow(row: JQuery): void;
        saveAsExcel(): void;
        saveAsPDF(): JQueryPromise<any>;
        saveRow(): void;
        select(): JQuery;
        select(rows: Element): void;
        select(rows: JQuery): void;
        setDataSource(dataSource: kendo.data.TreeListDataSource): void;
        showColumn(column: number): void;
        showColumn(column: string): void;
        hideColumn(column: number): void;
        hideColumn(column: string): void;
        lockColumn(column: number): void;
        lockColumn(column: string): void;
        unlockColumn(column: number): void;
        unlockColumn(column: string): void;
        reorderColumn(destIndex: number, column: any): void;

    }

    interface TreeListColumnMenuMessages {
        columns?: string;
        filter?: string;
        sortAscending?: string;
        sortDescending?: string;
    }

    interface TreeListColumnMenu {
        columns?: boolean;
        filterable?: boolean;
        sortable?: boolean;
        messages?: TreeListColumnMenuMessages;
    }

    interface TreeListColumnCommandItem {
        className?: string;
        click?: Function;
        name?: string;
        text?: string;
    }

    interface TreeListColumnFilterable {
        ui?: string|Function;
    }

    interface TreeListColumnSortable {
        compare?: Function;
    }

    interface TreeListColumn {
        attributes?: any;
        command?: TreeListColumnCommandItem[];
        encoded?: boolean;
        expandable?: boolean;
        field?: string;
        filterable?: boolean|TreeListColumnFilterable;
        footerTemplate?: string|Function;
        format?: string;
        headerAttributes?: any;
        headerTemplate?: string|Function;
        minScreenWidth?: number;
        sortable?: boolean|TreeListColumnSortable;
        template?: string|Function;
        title?: string;
        width?: string|number;
        hidden?: boolean;
        menu?: boolean;
        locked?: boolean;
        lockable?: boolean;
    }

    interface TreeListEditable {
        mode?: string;
        move?: boolean;
        template?: string|Function;
        window?: any;
    }

    interface TreeListExcel {
        fileName?: string;
        filterable?: boolean;
        forceProxy?: boolean;
        proxyURL?: string;
    }

    interface TreeListFilterableMessages {
        and?: string;
        clear?: string;
        filter?: string;
        info?: string;
        isFalse?: string;
        isTrue?: string;
        or?: string;
        selectValue?: string;
        cancel?: string;
        operator?: string;
    }

    interface TreeListFilterable {
        extra?: boolean;
        messages?: TreeListFilterableMessages;
    }

    interface TreeListMessagesCommands {
        canceledit?: string;
        create?: string;
        createchild?: string;
        destroy?: string;
        edit?: string;
        excel?: string;
        pdf?: string;
        update?: string;
    }

    interface TreeListMessages {
        commands?: TreeListMessagesCommands;
        loading?: string;
        noRows?: string;
        requestFailed?: string;
        retry?: string;
    }

    interface TreeListPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface TreeListPdf {
        author?: string;
        avoidLinks?: boolean|string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: TreeListPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface TreeListSortable {
        allowUnsort?: boolean;
        mode?: string;
    }

    interface TreeListToolbarItem {
        click?: Function;
        name?: string;
        text?: string;
    }

    interface TreeListOptions {
        name?: string;
        autoBind?: boolean;
        columns?: TreeListColumn[];
        resizable?: boolean;
        reorderable?: boolean;
        columnMenu?: boolean|TreeListColumnMenu;
        dataSource?: any|any|kendo.data.TreeListDataSource;
        editable?: boolean|TreeListEditable;
        excel?: TreeListExcel;
        filterable?: boolean|TreeListFilterable;
        height?: number|string;
        messages?: TreeListMessages;
        pdf?: TreeListPdf;
        scrollable?: boolean|any;
        selectable?: boolean|string;
        sortable?: boolean|TreeListSortable;
        toolbar?: TreeListToolbarItem[] | any;
        cancel?(e: TreeListCancelEvent): void;
        change?(e: TreeListChangeEvent): void;
        collapse?(e: TreeListCollapseEvent): void;
        dataBinding?(e: TreeListDataBindingEvent): void;
        dataBound?(e: TreeListDataBoundEvent): void;
        dragstart?(e: TreeListDragstartEvent): void;
        drag?(e: TreeListDragEvent): void;
        dragend?(e: TreeListDragendEvent): void;
        drop?(e: TreeListDropEvent): void;
        edit?(e: TreeListEditEvent): void;
        excelExport?(e: TreeListExcelExportEvent): void;
        expand?(e: TreeListExpandEvent): void;
        filterMenuInit?(e: TreeListFilterMenuInitEvent): void;
        pdfExport?(e: TreeListPdfExportEvent): void;
        remove?(e: TreeListRemoveEvent): void;
        save?(e: TreeListSaveEvent): void;
        columnShow?(e: TreeListColumnShowEvent): void;
        columnHide?(e: TreeListColumnHideEvent): void;
        columnReorder?(e: TreeListColumnReorderEvent): void;
        columnResize?(e: TreeListColumnResizeEvent): void;
        columnMenuInit?(e: TreeListColumnMenuInitEvent): void;
        columnLock?(e: TreeListColumnLockEvent): void;
        columnUnlock?(e: TreeListColumnUnlockEvent): void;
    }
    interface TreeListEvent {
        sender: TreeList;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TreeListCancelEvent extends TreeListEvent {
        container?: JQuery;
        model?: kendo.data.TreeListModel;
    }

    interface TreeListChangeEvent extends TreeListEvent {
    }

    interface TreeListCollapseEvent extends TreeListEvent {
        model?: kendo.data.TreeListModel;
    }

    interface TreeListDataBindingEvent extends TreeListEvent {
    }

    interface TreeListDataBoundEvent extends TreeListEvent {
    }

    interface TreeListDragstartEvent extends TreeListEvent {
        source?: kendo.data.TreeListModel;
    }

    interface TreeListDragEvent extends TreeListEvent {
        source?: kendo.data.TreeListModel;
        target?: JQuery;
    }

    interface TreeListDragendEvent extends TreeListEvent {
        source?: kendo.data.TreeListModel;
        destination?: kendo.data.TreeListModel;
    }

    interface TreeListDropEvent extends TreeListEvent {
        source?: kendo.data.TreeListModel;
        destination?: kendo.data.TreeListModel;
        dropTarget?: Element;
        valid?: boolean;
        setValid?: boolean;
    }

    interface TreeListEditEvent extends TreeListEvent {
        container?: JQuery;
        model?: kendo.data.TreeListModel;
    }

    interface TreeListExcelExportEvent extends TreeListEvent {
        data?: any;
        workbook?: any;
    }

    interface TreeListExpandEvent extends TreeListEvent {
        model?: kendo.data.TreeListModel;
    }

    interface TreeListFilterMenuInitEvent extends TreeListEvent {
        container?: JQuery;
        field?: string;
    }

    interface TreeListPdfExportEvent extends TreeListEvent {
        promise?: JQueryPromise<any>;
    }

    interface TreeListRemoveEvent extends TreeListEvent {
        model?: kendo.data.TreeListModel;
        row?: JQuery;
    }

    interface TreeListSaveEvent extends TreeListEvent {
        model?: kendo.data.TreeListModel;
        container?: JQuery;
    }

    interface TreeListColumnShowEvent extends TreeListEvent {
        column?: any;
    }

    interface TreeListColumnHideEvent extends TreeListEvent {
        column?: any;
    }

    interface TreeListColumnReorderEvent extends TreeListEvent {
        column?: any;
        newIndex?: number;
        oldIndex?: number;
    }

    interface TreeListColumnResizeEvent extends TreeListEvent {
        column?: any;
        newWidth?: number;
        oldWidth?: number;
    }

    interface TreeListColumnMenuInitEvent extends TreeListEvent {
        container?: JQuery;
        field?: string;
    }

    interface TreeListColumnLockEvent extends TreeListEvent {
        column?: any;
    }

    interface TreeListColumnUnlockEvent extends TreeListEvent {
        column?: any;
    }


    class TreeView extends kendo.ui.Widget {

        static fn: TreeView;

        options: TreeViewOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TreeView;

        constructor(element: Element, options?: TreeViewOptions);


        append(nodeData: any, parentNode?: JQuery, success?: Function): JQuery;
        append(nodeData: JQuery, parentNode?: JQuery, success?: Function): JQuery;
        collapse(nodes: JQuery): void;
        collapse(nodes: Element): void;
        collapse(nodes: string): void;
        dataItem(node: JQuery): kendo.data.Node;
        dataItem(node: Element): kendo.data.Node;
        dataItem(node: string): kendo.data.Node;
        destroy(): void;
        detach(node: JQuery): JQuery;
        detach(node: Element): JQuery;
        detach(node: string): JQuery;
        enable(nodes: JQuery, enable?: boolean): void;
        enable(nodes: Element, enable?: boolean): void;
        enable(nodes: string, enable?: boolean): void;
        expand(nodes: JQuery): void;
        expand(nodes: Element): void;
        expand(nodes: string): void;
        expandPath(path: any, complete: Function): void;
        expandTo(targetNode: kendo.data.Node): void;
        expandTo(targetNode: any): void;
        findByText(text: string): JQuery;
        findByUid(text: string): JQuery;
        insertAfter(nodeData: any, referenceNode: JQuery): void;
        insertBefore(nodeData: any, referenceNode: JQuery): void;
        items(): any;
        parent(node: JQuery): JQuery;
        parent(node: Element): JQuery;
        parent(node: string): JQuery;
        remove(node: JQuery): void;
        remove(node: Element): void;
        remove(node: string): void;
        select(): JQuery;
        select(node?: JQuery): void;
        select(node?: Element): void;
        select(node?: string): void;
        setDataSource(dataSource: kendo.data.HierarchicalDataSource): void;
        text(node: JQuery): string;
        text(node: Element): string;
        text(node: string): string;
        text(node: JQuery, newText: string): void;
        text(node: Element, newText: string): void;
        text(node: string, newText: string): void;
        toggle(node: JQuery): void;
        toggle(node: Element): void;
        toggle(node: string): void;
        updateIndeterminate(node: JQuery): void;

    }

    interface TreeViewAnimationCollapse {
        duration?: number;
        effects?: string;
    }

    interface TreeViewAnimationExpand {
        duration?: number;
        effects?: string;
    }

    interface TreeViewAnimation {
        collapse?: boolean|TreeViewAnimationCollapse;
        expand?: boolean|TreeViewAnimationExpand;
    }

    interface TreeViewCheckboxes {
        checkChildren?: boolean;
        name?: string;
        template?: string|Function;
    }

    interface TreeViewMessages {
        loading?: string;
        requestFailed?: string;
        retry?: string;
    }

    interface TreeViewOptions {
        name?: string;
        animation?: boolean|TreeViewAnimation;
        autoBind?: boolean;
        autoScroll?: boolean;
        checkboxes?: boolean|TreeViewCheckboxes;
        dataImageUrlField?: string;
        dataSource?: any|any|kendo.data.HierarchicalDataSource;
        dataSpriteCssClassField?: string;
        dataTextField?: string|any;
        dataUrlField?: string;
        dragAndDrop?: boolean;
        loadOnDemand?: boolean;
        messages?: TreeViewMessages;
        template?: string|Function;
        change?(e: TreeViewEvent): void;
        check?(e: TreeViewCheckEvent): void;
        collapse?(e: TreeViewCollapseEvent): void;
        dataBound?(e: TreeViewDataBoundEvent): void;
        drag?(e: TreeViewDragEvent): void;
        dragend?(e: TreeViewDragendEvent): void;
        dragstart?(e: TreeViewDragstartEvent): void;
        drop?(e: TreeViewDropEvent): void;
        expand?(e: TreeViewExpandEvent): void;
        navigate?(e: TreeViewNavigateEvent): void;
        select?(e: TreeViewSelectEvent): void;
    }
    interface TreeViewEvent {
        sender: TreeView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TreeViewCheckEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewCollapseEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewDataBoundEvent extends TreeViewEvent {
        node?: JQuery;
    }

    interface TreeViewDragEvent extends TreeViewEvent {
        sourceNode?: Element;
        dropTarget?: Element;
        pageX?: number;
        pageY?: number;
        statusClass?: string;
        setStatusClass?: Function;
    }

    interface TreeViewDragendEvent extends TreeViewEvent {
        sourceNode?: Element;
        destinationNode?: Element;
        dropPosition?: string;
    }

    interface TreeViewDragstartEvent extends TreeViewEvent {
        sourceNode?: Element;
    }

    interface TreeViewDropEvent extends TreeViewEvent {
        sourceNode?: Element;
        destinationNode?: Element;
        valid?: boolean;
        setValid?: Function;
        dropTarget?: Element;
        dropPosition?: string;
    }

    interface TreeViewExpandEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewNavigateEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewSelectEvent extends TreeViewEvent {
        node?: Element;
    }


    class Upload extends kendo.ui.Widget {

        static fn: Upload;

        options: UploadOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Upload;

        constructor(element: Element, options?: UploadOptions);


        clearAllFiles(): void;
        clearFile(): void;
        clearFileByUid(): void;
        destroy(): void;
        disable(): void;
        enable(enable?: boolean): void;
        focus(): void;
        getFiles(): any;
        removeAllFiles(): void;
        removeFile(): void;
        removeFileByUid(): void;
        toggle(enable: boolean): void;
        upload(): void;

    }

    interface UploadAsync {
        autoUpload?: boolean;
        batch?: boolean;
        removeField?: string;
        removeUrl?: string;
        removeVerb?: string;
        saveField?: string;
        saveUrl?: string;
        withCredentials?: boolean;
    }

    interface UploadFile {
        extension?: string;
        name?: string;
        size?: number;
    }

    interface UploadLocalization {
        cancel?: string;
        clearSelectedFiles?: string;
        dropFilesHere?: string;
        headerStatusUploaded?: string;
        headerStatusUploading?: string;
        invalidFileExtension?: string;
        invalidMaxFileSize?: string;
        invalidMinFileSize?: string;
        remove?: string;
        retry?: string;
        select?: string;
        statusFailed?: string;
        statusUploaded?: string;
        statusUploading?: string;
        uploadSelectedFiles?: string;
    }

    interface UploadValidation {
        allowedExtensions?: any;
        maxFileSize?: number;
        minFileSize?: number;
    }

    interface UploadOptions {
        name?: string;
        async?: UploadAsync;
        dropZone?: string;
        enabled?: boolean;
        files?: UploadFile[];
        localization?: UploadLocalization;
        multiple?: boolean;
        showFileList?: boolean;
        template?: string|Function;
        validation?: UploadValidation;
        cancel?(e: UploadCancelEvent): void;
        complete?(e: UploadEvent): void;
        error?(e: UploadErrorEvent): void;
        progress?(e: UploadProgressEvent): void;
        remove?(e: UploadRemoveEvent): void;
        select?(e: UploadSelectEvent): void;
        success?(e: UploadSuccessEvent): void;
        upload?(e: UploadUploadEvent): void;
    }
    interface UploadEvent {
        sender: Upload;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface UploadCancelEvent extends UploadEvent {
        files?: UploadFile[];
    }

    interface UploadErrorEvent extends UploadEvent {
        files?: UploadFile[];
        operation?: string;
        XMLHttpRequest?: any;
    }

    interface UploadProgressEvent extends UploadEvent {
        files?: UploadFile[];
        percentComplete?: number;
    }

    interface UploadRemoveEvent extends UploadEvent {
        files?: UploadFile[];
        data?: any;
    }

    interface UploadSelectEvent extends UploadEvent {
        e?: any;
        files?: UploadFile[];
    }

    interface UploadSuccessEvent extends UploadEvent {
        files?: UploadFile[];
        operation?: string;
        response?: any;
        XMLHttpRequest?: any;
    }

    interface UploadUploadEvent extends UploadEvent {
        files?: UploadFile[];
        data?: any;
        formData?: any;
        XMLHttpRequest?: any;
    }


    class Validator extends kendo.ui.Widget {

        static fn: Validator;

        options: ValidatorOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Validator;

        constructor(element: Element, options?: ValidatorOptions);


        errors(): any;
        hideMessages(): void;
        validate(): boolean;
        validateInput(input: Element): boolean;
        validateInput(input: JQuery): boolean;

    }

    interface ValidatorOptions {
        name?: string;
        errorTemplate?: string;
        messages?: any;
        rules?: any;
        validateOnBlur?: boolean;
        validate?(e: ValidatorValidateEvent): void;
    }
    interface ValidatorEvent {
        sender: Validator;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ValidatorValidateEvent extends ValidatorEvent {
        valid?: boolean;
    }


    class Window extends kendo.ui.Widget {

        static fn: Window;

        options: WindowOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Window;

        constructor(element: Element, options?: WindowOptions);


        center(): kendo.ui.Window;
        close(): kendo.ui.Window;
        content(): string;
        content(content?: string): kendo.ui.Window;
        content(content?: JQuery): kendo.ui.Window;
        destroy(): void;
        isMaximized(): boolean;
        isMinimized(): boolean;
        maximize(): kendo.ui.Window;
        minimize(): kendo.ui.Window;
        open(): kendo.ui.Window;
        pin(): void;
        refresh(options: any): kendo.ui.Window;
        restore(): kendo.ui.Window;
        setOptions(options: any): void;
        title(): string;
        title(text?: string): kendo.ui.Window;
        toFront(): kendo.ui.Window;
        toggleMaximization(): kendo.ui.Window;
        unpin(): void;

    }

    interface WindowAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface WindowAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface WindowAnimation {
        close?: WindowAnimationClose;
        open?: WindowAnimationOpen;
    }

    interface WindowContent {
        template?: string;
    }

    interface WindowPosition {
        top?: number|string;
        left?: number|string;
    }

    interface WindowRefreshOptions {
        url?: string;
        cache?: boolean;
        data?: any;
        type?: string;
        template?: string;
        iframe?: boolean;
    }

    interface WindowOptions {
        name?: string;
        actions?: any;
        animation?: boolean|WindowAnimation;
        appendTo?: any|string;
        autoFocus?: boolean;
        content?: WindowContent;
        draggable?: boolean;
        iframe?: boolean;
        height?: number|string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        pinned?: boolean;
        position?: WindowPosition;
        resizable?: boolean;
        scrollable?: boolean;
        title?: string|boolean;
        visible?: boolean;
        width?: number|string;
        activate?(e: WindowEvent): void;
        close?(e: WindowCloseEvent): void;
        deactivate?(e: WindowEvent): void;
        dragend?(e: WindowEvent): void;
        dragstart?(e: WindowEvent): void;
        error?(e: WindowErrorEvent): void;
        maximize?(e: WindowEvent): void;
        minimize?(e: WindowEvent): void;
        open?(e: WindowEvent): void;
        refresh?(e: WindowEvent): void;
        resize?(e: WindowEvent): void;
    }
    interface WindowEvent {
        sender: Window;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface WindowCloseEvent extends WindowEvent {
        userTriggered?: boolean;
    }

    interface WindowErrorEvent extends WindowEvent {
        xhr?: JQueryXHR;
        status?: string;
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
declare namespace kendo.spreadsheet {
    class CustomFilter extends Observable {


        options: CustomFilterOptions;




        init(options: any): void;

    }

    interface CustomFilterOptions {
        name?: string;
    }
    interface CustomFilterEvent {
        sender: CustomFilter;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class DynamicFilter extends Observable {


        options: DynamicFilterOptions;




        init(options: any): void;

    }

    interface DynamicFilterOptions {
        name?: string;
    }
    interface DynamicFilterEvent {
        sender: DynamicFilter;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Range extends Observable {


        options: RangeOptions;




        background(): string;
        background(value?: string): void;
        bold(): boolean;
        bold(value?: boolean): void;
        borderBottom(): any;
        borderBottom(value?: any): void;
        borderLeft(): any;
        borderLeft(value?: any): void;
        borderRight(): any;
        borderRight(value?: any): void;
        borderTop(): any;
        borderTop(value?: any): void;
        color(): string;
        color(value?: string): void;
        clear(options?: any): void;
        clearFilter(indices: any): void;
        clearFilter(indices: number): void;
        editor(): string;
        editor(value?: string): void;
        enable(): boolean;
        enable(value?: boolean): void;
        fillFrom(srcRange: Range, direction?: number): void;
        fillFrom(srcRange: string, direction?: number): void;
        filter(filter: boolean): void;
        filter(filter: any): void;
        fontFamily(): string;
        fontFamily(value?: string): void;
        fontSize(): number;
        fontSize(value?: number): void;
        forEachCell(callback: Function): void;
        format(): string;
        format(format?: string): void;
        formula(): string;
        formula(formula?: string): void;
        hasFilter(): boolean;
        input(): any;
        input(value?: string): void;
        input(value?: number): void;
        input(value?: Date): void;
        isSortable(): boolean;
        isFilterable(): boolean;
        italic(): boolean;
        italic(value?: boolean): void;
        link(): string;
        link(url?: string): void;
        merge(): void;
        select(): void;
        sort(sort: number): void;
        sort(sort: any): void;
        textAlign(): string;
        textAlign(value?: string): void;
        unmerge(): void;
        values(values: any): void;
        validation(): any;
        validation(value?: any): void;
        value(): any;
        value(value?: string): void;
        value(value?: number): void;
        value(value?: Date): void;
        verticalAlign(): string;
        verticalAlign(value?: string): void;
        wrap(): boolean;
        wrap(value?: boolean): void;

    }

    interface RangeOptions {
        name?: string;
    }
    interface RangeEvent {
        sender: Range;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Sheet extends Observable {


        options: SheetOptions;




        clearFilter(indexes: number): void;
        clearFilter(indexes: any): void;
        columnWidth(): void;
        columnWidth(index: number, width?: number): void;
        batch(callback: Function, changeEventArgs: any): void;
        deleteColumn(index: number): void;
        fromJSON(data: any): void;
        frozenColumns(): number;
        frozenColumns(count?: number): void;
        frozenRows(): number;
        frozenRows(count?: number): void;
        hideColumn(index: number): void;
        hideRow(index: number): void;
        insertColumn(index: number): void;
        insertRow(index: number): void;
        range(ref: string): kendo.spreadsheet.Range;
        rowHeight(): void;
        rowHeight(index: number, width?: number): void;
        selection(): kendo.spreadsheet.Range;
        setDataSource(dataSource: kendo.data.DataSource, columns?: any): void;
        showGridLines(): boolean;
        showGridLines(showGridLines?: boolean): void;
        toJSON(): void;
        unhideColumn(index: number): void;
        unhideRow(index: number): void;

    }

    interface SheetOptions {
        name?: string;
        change?(e: SheetChangeEvent): void;
    }
    interface SheetEvent {
        sender: Sheet;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SheetChangeEvent extends SheetEvent {
    }


    class TopFilter extends Observable {


        options: TopFilterOptions;




        init(options: any): void;

    }

    interface TopFilterOptions {
        name?: string;
    }
    interface TopFilterEvent {
        sender: TopFilter;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class ValueFilter extends Observable {


        options: ValueFilterOptions;




        init(options: any): void;

    }

    interface ValueFilterOptions {
        name?: string;
    }
    interface ValueFilterEvent {
        sender: ValueFilter;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
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

    kendoAlert(): JQuery;
    kendoAlert(options: kendo.ui.AlertOptions): JQuery;
    data(key: "kendoAlert"): kendo.ui.Alert;

    kendoAutoComplete(): JQuery;
    kendoAutoComplete(options: kendo.ui.AutoCompleteOptions): JQuery;
    data(key: "kendoAutoComplete"): kendo.ui.AutoComplete;

    kendoButton(): JQuery;
    kendoButton(options: kendo.ui.ButtonOptions): JQuery;
    data(key: "kendoButton"): kendo.ui.Button;

    kendoCalendar(): JQuery;
    kendoCalendar(options: kendo.ui.CalendarOptions): JQuery;
    data(key: "kendoCalendar"): kendo.ui.Calendar;

    kendoColorPalette(): JQuery;
    kendoColorPalette(options: kendo.ui.ColorPaletteOptions): JQuery;
    data(key: "kendoColorPalette"): kendo.ui.ColorPalette;

    kendoColorPicker(): JQuery;
    kendoColorPicker(options: kendo.ui.ColorPickerOptions): JQuery;
    data(key: "kendoColorPicker"): kendo.ui.ColorPicker;

    kendoComboBox(): JQuery;
    kendoComboBox(options: kendo.ui.ComboBoxOptions): JQuery;
    data(key: "kendoComboBox"): kendo.ui.ComboBox;

    kendoConfirm(): JQuery;
    kendoConfirm(options: kendo.ui.ConfirmOptions): JQuery;
    data(key: "kendoConfirm"): kendo.ui.Confirm;

    kendoContextMenu(): JQuery;
    kendoContextMenu(options: kendo.ui.ContextMenuOptions): JQuery;
    data(key: "kendoContextMenu"): kendo.ui.ContextMenu;

    kendoDatePicker(): JQuery;
    kendoDatePicker(options: kendo.ui.DatePickerOptions): JQuery;
    data(key: "kendoDatePicker"): kendo.ui.DatePicker;

    kendoDateTimePicker(): JQuery;
    kendoDateTimePicker(options: kendo.ui.DateTimePickerOptions): JQuery;
    data(key: "kendoDateTimePicker"): kendo.ui.DateTimePicker;

    kendoDialog(): JQuery;
    kendoDialog(options: kendo.ui.DialogOptions): JQuery;
    data(key: "kendoDialog"): kendo.ui.Dialog;

    kendoDropDownList(): JQuery;
    kendoDropDownList(options: kendo.ui.DropDownListOptions): JQuery;
    data(key: "kendoDropDownList"): kendo.ui.DropDownList;

    kendoEditor(): JQuery;
    kendoEditor(options: kendo.ui.EditorOptions): JQuery;
    data(key: "kendoEditor"): kendo.ui.Editor;

    kendoFilterMenu(): JQuery;
    kendoFilterMenu(options: kendo.ui.FilterMenuOptions): JQuery;
    data(key: "kendoFilterMenu"): kendo.ui.FilterMenu;

    kendoFlatColorPicker(): JQuery;
    kendoFlatColorPicker(options: kendo.ui.FlatColorPickerOptions): JQuery;
    data(key: "kendoFlatColorPicker"): kendo.ui.FlatColorPicker;

    kendoGantt(): JQuery;
    kendoGantt(options: kendo.ui.GanttOptions): JQuery;
    data(key: "kendoGantt"): kendo.ui.Gantt;

    kendoGrid(): JQuery;
    kendoGrid(options: kendo.ui.GridOptions): JQuery;
    data(key: "kendoGrid"): kendo.ui.Grid;

    kendoListView(): JQuery;
    kendoListView(options: kendo.ui.ListViewOptions): JQuery;
    data(key: "kendoListView"): kendo.ui.ListView;

    kendoMaskedTextBox(): JQuery;
    kendoMaskedTextBox(options: kendo.ui.MaskedTextBoxOptions): JQuery;
    data(key: "kendoMaskedTextBox"): kendo.ui.MaskedTextBox;

    kendoMediaPlayer(): JQuery;
    kendoMediaPlayer(options: kendo.ui.MediaPlayerOptions): JQuery;
    data(key: "kendoMediaPlayer"): kendo.ui.MediaPlayer;

    kendoMenu(): JQuery;
    kendoMenu(options: kendo.ui.MenuOptions): JQuery;
    data(key: "kendoMenu"): kendo.ui.Menu;

    kendoMultiSelect(): JQuery;
    kendoMultiSelect(options: kendo.ui.MultiSelectOptions): JQuery;
    data(key: "kendoMultiSelect"): kendo.ui.MultiSelect;

    kendoNotification(): JQuery;
    kendoNotification(options: kendo.ui.NotificationOptions): JQuery;
    data(key: "kendoNotification"): kendo.ui.Notification;

    kendoNumericTextBox(): JQuery;
    kendoNumericTextBox(options: kendo.ui.NumericTextBoxOptions): JQuery;
    data(key: "kendoNumericTextBox"): kendo.ui.NumericTextBox;

    kendoPager(): JQuery;
    kendoPager(options: kendo.ui.PagerOptions): JQuery;
    data(key: "kendoPager"): kendo.ui.Pager;

    kendoPanelBar(): JQuery;
    kendoPanelBar(options: kendo.ui.PanelBarOptions): JQuery;
    data(key: "kendoPanelBar"): kendo.ui.PanelBar;

    kendoPivotConfigurator(): JQuery;
    kendoPivotConfigurator(options: kendo.ui.PivotConfiguratorOptions): JQuery;
    data(key: "kendoPivotConfigurator"): kendo.ui.PivotConfigurator;

    kendoPivotGrid(): JQuery;
    kendoPivotGrid(options: kendo.ui.PivotGridOptions): JQuery;
    data(key: "kendoPivotGrid"): kendo.ui.PivotGrid;

    kendoPopup(): JQuery;
    kendoPopup(options: kendo.ui.PopupOptions): JQuery;
    data(key: "kendoPopup"): kendo.ui.Popup;

    kendoProgressBar(): JQuery;
    kendoProgressBar(options: kendo.ui.ProgressBarOptions): JQuery;
    data(key: "kendoProgressBar"): kendo.ui.ProgressBar;

    kendoPrompt(): JQuery;
    kendoPrompt(options: kendo.ui.PromptOptions): JQuery;
    data(key: "kendoPrompt"): kendo.ui.Prompt;

    kendoRangeSlider(): JQuery;
    kendoRangeSlider(options: kendo.ui.RangeSliderOptions): JQuery;
    data(key: "kendoRangeSlider"): kendo.ui.RangeSlider;

    kendoResponsivePanel(): JQuery;
    kendoResponsivePanel(options: kendo.ui.ResponsivePanelOptions): JQuery;
    data(key: "kendoResponsivePanel"): kendo.ui.ResponsivePanel;

    kendoScheduler(): JQuery;
    kendoScheduler(options: kendo.ui.SchedulerOptions): JQuery;
    data(key: "kendoScheduler"): kendo.ui.Scheduler;

    kendoSlider(): JQuery;
    kendoSlider(options: kendo.ui.SliderOptions): JQuery;
    data(key: "kendoSlider"): kendo.ui.Slider;

    kendoSortable(): JQuery;
    kendoSortable(options: kendo.ui.SortableOptions): JQuery;
    data(key: "kendoSortable"): kendo.ui.Sortable;

    kendoSplitter(): JQuery;
    kendoSplitter(options: kendo.ui.SplitterOptions): JQuery;
    data(key: "kendoSplitter"): kendo.ui.Splitter;

    kendoSpreadsheet(): JQuery;
    kendoSpreadsheet(options: kendo.ui.SpreadsheetOptions): JQuery;
    data(key: "kendoSpreadsheet"): kendo.ui.Spreadsheet;

    kendoTabStrip(): JQuery;
    kendoTabStrip(options: kendo.ui.TabStripOptions): JQuery;
    data(key: "kendoTabStrip"): kendo.ui.TabStrip;

    kendoTimePicker(): JQuery;
    kendoTimePicker(options: kendo.ui.TimePickerOptions): JQuery;
    data(key: "kendoTimePicker"): kendo.ui.TimePicker;

    kendoToolBar(): JQuery;
    kendoToolBar(options: kendo.ui.ToolBarOptions): JQuery;
    data(key: "kendoToolBar"): kendo.ui.ToolBar;

    kendoTooltip(): JQuery;
    kendoTooltip(options: kendo.ui.TooltipOptions): JQuery;
    data(key: "kendoTooltip"): kendo.ui.Tooltip;

    kendoTreeList(): JQuery;
    kendoTreeList(options: kendo.ui.TreeListOptions): JQuery;
    data(key: "kendoTreeList"): kendo.ui.TreeList;

    kendoTreeView(): JQuery;
    kendoTreeView(options: kendo.ui.TreeViewOptions): JQuery;
    data(key: "kendoTreeView"): kendo.ui.TreeView;

    kendoUpload(): JQuery;
    kendoUpload(options: kendo.ui.UploadOptions): JQuery;
    data(key: "kendoUpload"): kendo.ui.Upload;

    kendoValidator(): JQuery;
    kendoValidator(options: kendo.ui.ValidatorOptions): JQuery;
    data(key: "kendoValidator"): kendo.ui.Validator;

    kendoWindow(): JQuery;
    kendoWindow(options: kendo.ui.WindowOptions): JQuery;
    data(key: "kendoWindow"): kendo.ui.Window;

}
