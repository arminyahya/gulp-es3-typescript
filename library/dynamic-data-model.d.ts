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

  export enum EntityType {
    DataModel = 2,
    Bundle = 3,
  }
}
