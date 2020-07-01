declare module System {
  /**
   * Represents a globally unique identifier (GUID).
   */
  interface Guid {}
}

declare module System.Collections.Generic {
  interface KeyValuePair<TKey, TValue> {
    Key: TKey
    Value: TValue
  }
}

declare module DynamicDataModel {
  interface RowModel {
    Guid: System.Guid
    ParentGuid: System.Guid
    Values: System.Collections.Generic.KeyValuePair<string, any>[]
  }

  interface FieldTypeViewModel {
    Guid: System.Guid
    IsBundle: boolean
    Name: string
    SoftwareGuid: System.Guid
  }

  interface FormDataViewModel {
    Guid: System.Guid
    KeyValues: System.Collections.Generic.KeyValuePair<string, any>[]
    ParentGuid: System.Guid
  }
  interface FormDeleteValueModel {
    EntityId: number
    EntityType: DynamicDataModel.EntityType
    Guids: System.Guid[]
  }
  interface FormEntityValueModel {
    EntityId: number
    EntityType: number
    Rows: DynamicDataModel.RowModel[]
  }
  interface FormGeneratorViewModel {
    DataModelId: string
    DesigendForm: any
    // formData: DynamicDataModel.FormDataViewModel
    formData: any
    LayoutItems: any
    // Layoutkey: string
  }
  interface FormValueViewModel {
    Added: DynamicDataModel.FormEntityValueModel[]
    DataModelId: number
    Deleted: DynamicDataModel.FormDeleteValueModel[]
    LayoutKey: string
    Modified: DynamicDataModel.FormEntityValueModel[]
    RecordGuid: System.Guid
  }
  interface IndicatorInfoViewModel {
    Guid: System.Guid
    Title: string
  }
  interface Widget {
    Id: string
    IsDefault: boolean
  }
  interface LayoutFieldViewModel {
    DisplayWidgets: DynamicDataModel.Widget[]
    EditWidgets: DynamicDataModel.Widget[]
    FieldInstanceId: string
    Id: number
    Label: string
    Name: string
    SearchWidgets: DynamicDataModel.Widget[]
    Settings: string
    Type: DynamicDataModel.FieldTypeViewModel
  }
  interface LayoutItemRelation {
    EntityId: number
    ReferenceFieldId: number
  }
  interface LayoutItemViewModel {
    DisplayWidgetId: string
    EditWidgetId: string
    FieldInstance: DynamicDataModel.LayoutFieldViewModel
    Id: number
    IsBundle: boolean
    LayoutItemDefaultValue: string
    LayoutItems: DynamicDataModel.LayoutItemViewModel[]
    Relation: DynamicDataModel.LayoutItemRelation
    SearchWidgetId: string
  }

  interface BundleIdViewModel {
    Id: number
  }

  interface DataModelIdViewModel {
    Id: number
  }

  interface DataModelViewModel extends DynamicDataModel.DataModelIdViewModel {
    Bundles?: DynamicDataModel.BundleViewModel[]
    EntityGuid: System.Guid
    FieldInstances: DynamicDataModel.FieldViewModel[]
    Guid?: System.Guid
    Name: string
    ScopeGuid?: System.Guid
    SoftwareGuid: System.Guid
  }
  interface FieldTypeViewModel {
    Guid: System.Guid
    IsBundle: boolean
    Name: string
    SoftwareGuid: System.Guid
  }
  interface FieldViewModel {
    __status: DynamicDataModel.RowStatus
    Bookmark: string
    FieldId: number
    FieldInstances: DynamicDataModel.FieldViewModel[]
    Guid: System.Guid
    Id: string
    IsDisabled: boolean
    IsRequired: boolean
    Label: string
    Name: string
    ParentGuid: System.Guid
    Settings: string
    Type: DynamicDataModel.FieldTypeViewModel
    TypeGuid: System.Guid
  }
  interface FormDataViewModel {
    Guid: System.Guid
    KeyValues: System.Collections.Generic.KeyValuePair<string, any>[]
    ParentGuid: System.Guid
  }
  interface FormDeleteValueModel {
    EntityId: number
    EntityType: Chargoon.Didgah.DynamicDataModel.EntityType
    Guids: System.Guid[]
  }
  interface FormEntityValueModel {
    EntityId: number
    EntityType: number
    Rows: DynamicDataModel.RowModel[]
  }
  interface FormGeneratorViewModel {
    DataModelId: number
    DesigendForm: string
    formData: DynamicDataModel.FormDataViewModel
    LayoutItems: DynamicDataModel.LayoutItemViewModel[]
    Layoutkey: string
  }
  interface FormValueViewModel {
    Added: DynamicDataModel.FormEntityValueModel[]
    DataModelId: number
    Deleted: DynamicDataModel.FormDeleteValueModel[]
    LayoutKey: string
    Modified: DynamicDataModel.FormEntityValueModel[]
    RecordGuid: System.Guid
  }
  interface IndicatorInfoViewModel {
    Guid: System.Guid
    Title: string
  }
  interface LayoutFieldViewModel {
    DisplayWidgets: DynamicDataModel.Widget[]
    EditWidgets: DynamicDataModel.Widget[]
    FieldInstanceId: string
    Id: number
    Label: string
    Name: string
    SearchWidgets: DynamicDataModel.Widget[]
    Settings: string
    Type: DynamicDataModel.FieldTypeViewModel
  }
  interface LayoutItemRelation {
    EntityId: number
    ReferenceFieldId: number
  }
  interface LayoutItemViewModel {
    DisplayWidgetId: string
    EditWidgetId: string
    FieldInstance: DynamicDataModel.LayoutFieldViewModel
    Id: number
    IsBundle: boolean
    LayoutItemDefaultValue: string
    LayoutItems: DynamicDataModel.LayoutItemViewModel[]
    Relation: DynamicDataModel.LayoutItemRelation
    SearchWidgetId: string
  }
  interface LayoutLoadViewModel {
    EntityGuid: System.Guid
    LayoutKeyList: string[]
  }
  interface LayoutPageViewModel {
    DataModelId: number
    EntityGuid: System.Guid
    FieldInstances: DynamicDataModel.LayoutFieldViewModel[]
    Layouts: DynamicDataModel.LayoutViewModel[]
    SoftwareGuid: System.Guid
  }
  interface LayoutViewModel {
    Id: number
    LayoutDesign: string
    LayoutItems: DynamicDataModel.LayoutItemViewModel[]
    LayoutKey: string
  }
  interface OrphanDataCell {
    FieldName: string
    FieldValue: any
  }
  interface OrphanDataEntryViewModel {
    Layoutid: number
    LayoutItems: DynamicDataModel.OrphanLayoutItem[]
    orphanData: DynamicDataModel.OrphanDataRow[]
    OrphanId: number
  }
  interface OrphanDataRow {
    Guid: System.Guid
    KeyValues: DynamicDataModel.OrphanDataCell[]
    ParentGuid: System.Guid
  }
  interface OrphanDataViewModel {
    FieldInstanceId: number
    KeyValues: System.Collections.Generic.KeyValuePair<any, any>[]
  }
  interface OrphanLayoutItem {
    EditeWidgets: DynamicDataModel.Widget[]
    FieldName: string
    SoftwareGuid: System.Guid
    Title: string
    TypeGuid: System.Guid
  }
  interface OrphanListPageViewModel {
    OrphanList: DynamicDataModel.OrphanListViewModel
    ScopeList: DynamicDataModel.ScopeViewModel[]
  }
  interface OrphanListViewModel {
    Data: DynamicDataModel.OrphanViewModel[]
    orphans: DynamicDataModel.OrphanViewModel[]
  }
  interface OrphanShareViewModel extends DynamicDataModel.DataModelIdViewModel {
    ScopeGuids: System.Collections.Generic.KeyValuePair<System.Guid, boolean>[]
  }
  interface OrphanViewModel extends DynamicDataModel.DataModelIdViewModel {
    Name: string
    ScopeGuid: System.Guid
  }

  interface OrphanDataCell {
    FieldName: string
    FieldValue: any
  }
  interface OrphanDataEntryViewModel {
    Layoutid: number
    LayoutItems: DynamicDataModel.OrphanLayoutItem[]
    orphanData: DynamicDataModel.OrphanDataRow[]
    OrphanId: number
  }
  interface OrphanDataRow {
    Guid: System.Guid
    KeyValues: DynamicDataModel.OrphanDataCell[]
    ParentGuid: System.Guid
  }
  interface OrphanDataViewModel {
    FieldInstanceId: number
    KeyValues: System.Collections.Generic.KeyValuePair<any, any>[]
  }
  interface OrphanLayoutItem {
    EditeWidgets: DynamicDataModel.Widget[]
    FieldName: string
    SoftwareGuid: System.Guid
    Title: string
    TypeGuid: System.Guid
  }

  interface ReferencedOrphanFieldInRelation {
    EntityId: number
    OrphanFieldReferenceId: number
    ReferenceFieldId: number
  }
  interface RowModel {
    Guid: System.Guid
    ParentGuid: System.Guid
    Values: System.Collections.Generic.KeyValuePair<string, any>[]
  }
  interface ScopeViewModel {
    Guid: System.Guid
    IsShared: boolean
    Name: string
  }
  interface SignatureData {
    UserFullName: string
    UserId: string
    Username: string
  }
  interface SignatureViewModel {
    ExtraData: DynamicDataModel.SignatureData
    SignatureId: string
  }
  interface Widget {
    Id: string
    IsDefault: boolean
  }

  interface BundleViewModel extends Chargoon.Didgah.Common5.UI.Models.DynamicDataModel.BundleIdViewModel {
    FieldInstanceReferenceGuid: System.Guid
    FieldInstances: Chargoon.Didgah.Common5.UI.Models.DynamicDataModel.FieldViewModel[]
    Guid: System.Guid
    ParentGuid: System.Guid
  }

  export enum ServiceResultErrorType {
    NotFound = 0,
    IDataModelStorageService_EmptyName = 1,
    IDataModelStorageService_InvalidName = 2,
    IDataModelStorageService_DuplicateName = 3,
    IDataModelStorageService_NameTooLong = 4,
    IDataModelStorageService_ParentNotFound = 5,
    IDataModelStorageService_DuplicateBookmark = 6,
    IDataModelStorageService_InvalidBookmark = 7,
    IDataModelStorageService_Insert_DuplicateDataModelEntity = 8,
    IDataModelStorageService_Insert_DuplicateTypeInstance = 9,
    IDataModelStorageService_Insert_MissingRequiredFieldInstance = 10,
    IDataModelStorageService_Update_TypeInstanceIsInUseInLayout = 11,
    IDataModelStorageService_SaveScope_InvalidDataModel = 12,
    IDataModelStorageService_SaveScope_DataModelInUseInRelation = 13,
    IDataModelService_Save_ValidationFailed = 14,
    IDataModelService_Save_Bundle_InvalidDataModel = 15,
  }

  export enum BundleViewModel {
    Id,
    Guid,
    ParentGuid,
    FieldInstanceReferenceGuid,
    FieldInstances,
  }

  export enum EntityType {
    DataModel = 2,
    Bundle = 3,
  }
}

declare module ExtraModel {
  interface Component extends ExtraModel.Control {
    Code: string
    DataIndex: string
    Label: string
    Required: boolean
    Rules?: any[]
    SoftwareGuid: System.Guid
  }
  interface Container extends ExtraModel.Control {
    Children: ExtraModel.IControl[]
    Code: string
    Identifier: string
  }
  interface Control {
    Attributes?: any
    Type: ExtraModel.ControlType
  }
  interface FileModel {
    Extension: string
    FileName: string
    FileType: number
    ID: string
    Size: number
  }
  interface GridColumn extends ExtraModel.Component {
    Width: string
  }
  interface SearchModel {
    CompareOptions: ExtraModel.PairValue<number>[]
    Field: ExtraModel.PairValue<string>
    ValueComponent: ExtraModel.IComponent
  }
}
declare module ExtraModel.Containers {
  interface FieldsetAttribute {
    Title: string
  }
}

declare module DynamicDataModel.Layout {
  type DidgahDeferred<T> = any
  interface IwidgetSettingFromProps {
    getWidgetSetting: (setting: IWidgetSetting) => void
    initialSettingValues: any
  }

  interface IWidgetSetting {
    isValid: () => Promise<null>
    getRules: () => object
    getAttributes: () => object
  }

  interface IWidgetFactory {
    getDataEntryViewComponent: (softwareGuid: System.Guid, widgetId: string) => React.ReactNode
    getWidget: (softwareGuid: System.Guid, widgetId: string) => React.ReactNode
    importModules: () => DidgahDeferred<boolean>
    importModuleBySoftware: (softwareGuid: System.Guid) => DidgahDeferred<boolean>
    onInit: (softwareGuid: System.Guid, widgetId: string, attributes: object) => any
    hasRequiredSetting: (softwareGuid: System.Guid, widgetId: string) => boolean
    getConsistentRules?: (softwareGuid: System.Guid, widgetId: string) => Array<object>
    validateWidgetSetting?: (softwareGuid: System.Guid, widgetId: string, setting: object) => boolean
  }

  export interface IDynamicDataModelUIManager {
    getAvailableEditWidgets?: () => React.ReactNode[]
    getAvailableDisplayWidgets?: () => React.ReactNode[]
    getAvailableSearchWidgets?: () => React.ReactNode[]
    getDataEntryEditComponent: (widgetId: string) => React.ReactNode
    getDataEntryViewComponent: (widgetId: string) => React.ReactNode
    getWidget: (widgetId: string) => React.ReactNode
    // getWidgetSettingForm: (widgetId: string, props: object) => React.ReactNode
    // getFieldTypeSettingForm?: (typeGuid: System.Guid, props: FieldTypeFormSettingProps) => React.ReactNode
    getCustomDataEntryEditComponent?: (widgetId: string) => React.ReactNode
    getCustomDataEntryViewComponent: (widgetId: string) => React.ReactNode
    getCustomDataEntryValidation?: (widgetId: string) => any[]
    onInit: (widgetId: string, attributes: object) => any
    hasRequiredSetting: (widgetId: string) => boolean
    getConsistentRules?: (widgetId: string) => Array<object>
    validateWidgetSetting?: (widgetId: string, setting: object) => boolean
  }

  export interface Item {
    id: any
    parentId: any
    index: number
    isFieldBindableWidget?: boolean
    correspondingFieldInstance?: LayoutFieldViewModel
    control: IComponent | IContainer
    orderIndex?: number
    editWidgetId?: string
    displayWidgetId?: string
    searchWidgetId?: string
    isValid: boolean
  }

  export interface DraggableElement {
    id: string
    metadata: DraggableElementMetadata | DraggableUserControlMetadata
  }

  export interface DraggableElementMetadata {
    type: string
    component: IComponent | 'fieldset' | 'row' | 'form'
    attributes: object
    control: IComponent | IContainer
    formList?: { Key: string; Value: string }[]
  }

  export interface DraggableUserControlMetadata extends DraggableElementMetadata {
    controlFactory: (component: IComponent) => any
    //setting: Array<Setting>;
    label: string
    layoutItems?: LayoutViewModel[]
  }

  export interface ContainerState {
    items: Array<Item>
  }

  export interface ContainerProps extends ComponentProps {
    items: Array<Item>
    addItems: (item: Item[]) => void
  }

  export interface ComponentProps {
    mode: string
    metadata: Item
    findElement: (id) => any
    onElementMove: (draggedId, overIndex, item) => void
    deleteItem: (item: Item) => void
    addAttributesAndRulesToWidget: (item: Item, attributes: Array<any>, rules: Array<any>) => void
    widgetFactory: IWidgetFactory
  }

  export interface FieldTypeFormSettingProps {
    scopeGuid: System.Guid
    value: any
    onCancel: () => void
    onSave: (settingValue: object, guid?: System.Guid) => void
    isFieldInstanceAdded: boolean
  }

  export type IWidget = {
    component: React.SFC<any> | React.ComponentClass<any> | string
    setting?: React.SFC<any> | React.ComponentClass<any> | string
    events?: LifeCycleEvent
    getConsistentRules?: () => Array<object>
  }

  interface LifeCycleEvent {
    onInit?: (widgetId: string, attributes: object) => Promise<object>
  }
}
