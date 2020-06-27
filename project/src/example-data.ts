const exampleDataStructure = {
    DataModelId: 'F8PJGtUTatTBvGwIlDZTGg',
    Layoutkey: 'testBase2-DidgahWeb',
    DesigendForm: [
      {
        id: 0.19540226172476705,
        index: 0,
        control: {
          Identifier: '',
          Type: 1,
          Code: 'Fieldset',
          Attributes: {
            Title: 'فیلدست ۱',
          },
          Children: [],
          Rules: [
            {
              Title: 'فیلدست ۱',
            },
          ],
        },
        orderIndex: 0,
        isValid: true,
      },
      {
        id: 0.7102255613499266,
        parentId: 0.19540226172476705,
        index: 0,
        control: {
          Identifier: '0.2892061075922687',
          Type: 1,
          Code: 'FormRow',
          Attributes: {
            cols: [24],
          },
          Children: [],
        },
        orderIndex: 0,
        isValid: true,
      },
      {
        id: 0.8411682271830765,
        parentId: 0.7102255613499266,
        index: 0,
        control: {
          Identifier: '0.5044389291358857',
          Type: 1,
          Code: 'Col',
          Attributes: {
            col: 24,
          },
          Children: [],
        },
        orderIndex: 0,
        isValid: true,
      },
      {
        parentId: 0.8411682271830765,
        id: 0.6571985040398887,
        index: 3,
        control: {
          Type: 2,
          Attributes: {
            fieldInstance: {
              FieldInstanceId: 'X8HpUEDMmWdjsK0cmdaagg',
              Name: 'Grid1',
              Label: 'Grid1',
              Type: {
                Guid: '48d1770c-c16a-4cf7-97ea-63be4a35537b',
                SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                Name: 'DynamicDataModel_BundleDisplayName',
                IsBundle: true,
              },
              Settings: '',
              EditWidgets: [
                {
                  Id: 'TableExEditor',
                  IsDefault: true,
                },
              ],
              DisplayWidgets: [
                {
                  Id: 'TableExViewer',
                  IsDefault: true,
                },
              ],
              SearchWidgets: [
                {
                  Id: 'TableExEditor',
                  IsDefault: true,
                },
              ],
            },
            fields: [
              {
                FieldInstanceId: 'ZTrrF0Kz5TI7kZMLRJG6jA',
                Name: 'CountryName',
                Label: 'CountryName',
                Type: {
                  Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                  SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                  Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                  IsBundle: false,
                },
                Settings: null,
                EditWidgets: [
                  {
                    Id: 'TextBox',
                    IsDefault: true,
                  },
                  {
                    Id: 'TextArea',
                    IsDefault: false,
                  },
                  {
                    Id: 'Email',
                    IsDefault: false,
                  },
                  {
                    Id: 'Url',
                    IsDefault: false,
                  },
                  {
                    Id: 'CommaSeparableComboBox',
                    IsDefault: false,
                  },
                ],
                DisplayWidgets: [
                  {
                    Id: 'Label',
                    IsDefault: true,
                  },
                  {
                    Id: 'IndicatorViewer',
                    IsDefault: false,
                  },
                ],
                SearchWidgets: [
                  {
                    Id: 'TextBox',
                    IsDefault: true,
                  },
                ],
              },
              {
                FieldInstanceId: 'dMseCgLNgsmlgWC01m39GQ',
                Name: 'CountryCode',
                Label: '2CountryCode',
                Type: {
                  Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                  SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                  Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                  IsBundle: false,
                },
                Settings: null,
                EditWidgets: [
                  {
                    Id: 'TextBox',
                    IsDefault: true,
                  },
                  {
                    Id: 'TextArea',
                    IsDefault: false,
                  },
                  {
                    Id: 'Email',
                    IsDefault: false,
                  },
                  {
                    Id: 'Url',
                    IsDefault: false,
                  },
                  {
                    Id: 'CommaSeparableComboBox',
                    IsDefault: false,
                  },
                ],
                DisplayWidgets: [
                  {
                    Id: 'Label',
                    IsDefault: true,
                  },
                  {
                    Id: 'IndicatorViewer',
                    IsDefault: false,
                  },
                ],
                SearchWidgets: [
                  {
                    Id: 'TextBox',
                    IsDefault: true,
                  },
                ],
              },
            ],
            selectedFields: [
              {
                FieldInstanceId: 'HrmbL1zlM4xr9BfYUsClhQ',
                Name: 'CountryName',
                Label: 'CountryName',
                Type: {
                  Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                  SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                  Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                  IsBundle: false,
                },
                Settings: null,
                EditWidgets: [
                  {
                    Id: 'TextBox',
                    IsDefault: true,
                  },
                  {
                    Id: 'TextArea',
                    IsDefault: false,
                  },
                  {
                    Id: 'Email',
                    IsDefault: false,
                  },
                  {
                    Id: 'Url',
                    IsDefault: false,
                  },
                  {
                    Id: 'CommaSeparableComboBox',
                    IsDefault: false,
                  },
                ],
                DisplayWidgets: [
                  {
                    Id: 'Label',
                    IsDefault: true,
                  },
                  {
                    Id: 'IndicatorViewer',
                    IsDefault: false,
                  },
                ],
                SearchWidgets: [
                  {
                    Id: 'TextBox',
                    IsDefault: true,
                  },
                ],
              },
              {
                FieldInstanceId: '86LV1oW3aoTe14UOzItGYg',
                Name: 'CountryCode',
                Label: 'CountryCode',
                Type: {
                  Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                  SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                  Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                  IsBundle: false,
                },
                Settings: null,
                EditWidgets: [
                  {
                    Id: 'TextBox',
                    IsDefault: true,
                  },
                  {
                    Id: 'TextArea',
                    IsDefault: false,
                  },
                  {
                    Id: 'Email',
                    IsDefault: false,
                  },
                  {
                    Id: 'Url',
                    IsDefault: false,
                  },
                  {
                    Id: 'CommaSeparableComboBox',
                    IsDefault: false,
                  },
                ],
                DisplayWidgets: [
                  {
                    Id: 'Label',
                    IsDefault: true,
                  },
                  {
                    Id: 'IndicatorViewer',
                    IsDefault: false,
                  },
                ],
                SearchWidgets: [
                  {
                    Id: 'TextBox',
                    IsDefault: true,
                  },
                ],
              },
            ],
            dataEntryLayoutItems: [
              {
                Id: 'BGTd3SftGgfhkZau0X9TZA',
                FieldInstance: {
                  FieldInstanceId: 'dMseCgLNgsmlgWC01m39GQ',
                  Name: 'CountryCode',
                  Label: '2CountryCode',
                  Type: {
                    Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                    SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                    Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                    IsBundle: false,
                  },
                  Settings: null,
                  EditWidgets: [
                    {
                      Id: 'TextBox',
                      IsDefault: true,
                    },
                    {
                      Id: 'TextArea',
                      IsDefault: false,
                    },
                    {
                      Id: 'Email',
                      IsDefault: false,
                    },
                    {
                      Id: 'Url',
                      IsDefault: false,
                    },
                    {
                      Id: 'CommaSeparableComboBox',
                      IsDefault: false,
                    },
                  ],
                  DisplayWidgets: [
                    {
                      Id: 'Label',
                      IsDefault: true,
                    },
                    {
                      Id: 'IndicatorViewer',
                      IsDefault: false,
                    },
                  ],
                  SearchWidgets: [
                    {
                      Id: 'TextBox',
                      IsDefault: true,
                    },
                  ],
                },
                LayoutItemDefaultValue: null,
                EditWidgetId: 'TextBox',
                DisplayWidgetId: 'Label',
                SearchWidgetId: 'TextBox',
                IsBundle: false,
                Relation: null,
                LayoutItems: [],
              },
              {
                Id: '4s-D8h_xlEiimRroA749kw',
                FieldInstance: {
                  FieldInstanceId: 'ZTrrF0Kz5TI7kZMLRJG6jA',
                  Name: 'CountryName',
                  Label: 'CountryName',
                  Type: {
                    Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                    SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                    Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                    IsBundle: false,
                  },
                  Settings: null,
                  EditWidgets: [
                    {
                      Id: 'TextBox',
                      IsDefault: true,
                    },
                    {
                      Id: 'TextArea',
                      IsDefault: false,
                    },
                    {
                      Id: 'Email',
                      IsDefault: false,
                    },
                    {
                      Id: 'Url',
                      IsDefault: false,
                    },
                    {
                      Id: 'CommaSeparableComboBox',
                      IsDefault: false,
                    },
                  ],
                  DisplayWidgets: [
                    {
                      Id: 'Label',
                      IsDefault: true,
                    },
                    {
                      Id: 'IndicatorViewer',
                      IsDefault: false,
                    },
                  ],
                  SearchWidgets: [
                    {
                      Id: 'TextBox',
                      IsDefault: true,
                    },
                  ],
                },
                LayoutItemDefaultValue: null,
                EditWidgetId: 'TextBox',
                DisplayWidgetId: 'Label',
                SearchWidgetId: 'TextBox',
                IsBundle: false,
                Relation: null,
                LayoutItems: [],
              },
            ],
            label: 'Grid1',
            design: [
              {
                id: 0.42031951540816026,
                index: 0,
                control: {
                  Identifier: '',
                  Type: 1,
                  Code: 'Fieldset',
                  Attributes: {
                    Title: 'فیلدست جدید',
                  },
                  Children: [],
                },
                orderIndex: 0,
                isValid: true,
              },
              {
                id: 0.38503776533004497,
                parentId: 0.42031951540816026,
                index: 0,
                control: {
                  Identifier: '0.4770841982863905',
                  Type: 1,
                  Code: 'FormRow',
                  Attributes: {
                    cols: [12, 12],
                  },
                  Children: [],
                },
                orderIndex: 0,
                isValid: true,
              },
              {
                id: 0.9207505206276649,
                parentId: 0.38503776533004497,
                index: 0,
                control: {
                  Identifier: '0.5740389906076677',
                  Type: 1,
                  Code: 'Col',
                  Attributes: {
                    col: 12,
                  },
                  Children: [],
                },
                orderIndex: 0,
                isValid: true,
              },
              {
                id: 0.07008070910353581,
                parentId: 0.38503776533004497,
                index: 0,
                control: {
                  Identifier: '0.1472431088033761',
                  Type: 1,
                  Code: 'Col',
                  Attributes: {
                    col: 12,
                  },
                  Children: [],
                },
                orderIndex: 0,
                isValid: true,
              },
              {
                id: 0.2421834677141217,
                parentId: 0.9207505206276649,
                index: 4,
                control: {
                  Type: 2,
                  Attributes: {
                    fieldInstance: {
                      FieldInstanceId: '86LV1oW3aoTe14UOzItGYg',
                      Name: 'CountryCode',
                      Label: 'CountryCode',
                      Type: {
                        Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                        SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                        Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                        IsBundle: false,
                      },
                      Settings: null,
                      EditWidgets: [
                        {
                          Id: 'TextBox',
                          IsDefault: true,
                        },
                        {
                          Id: 'TextArea',
                          IsDefault: false,
                        },
                        {
                          Id: 'Email',
                          IsDefault: false,
                        },
                        {
                          Id: 'Url',
                          IsDefault: false,
                        },
                        {
                          Id: 'CommaSeparableComboBox',
                          IsDefault: false,
                        },
                      ],
                      DisplayWidgets: [
                        {
                          Id: 'Label',
                          IsDefault: true,
                        },
                        {
                          Id: 'IndicatorViewer',
                          IsDefault: false,
                        },
                      ],
                      SearchWidgets: [
                        {
                          Id: 'TextBox',
                          IsDefault: true,
                        },
                      ],
                    },
                    label: 'CountryCode',
                  },
                  Code: 'TextBox',
                  DataIndex: 'CountryCode',
                  Label: 'CountryCode',
                  Required: false,
                  Rules: [],
                  SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                },
                orderIndex: 0,
                isFieldBindableWidget: true,
                correspondingFieldInstance: {
                  FieldInstanceId: '86LV1oW3aoTe14UOzItGYg',
                  Name: 'CountryCode',
                  Label: 'CountryCode',
                  Type: {
                    Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                    SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                    Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                    IsBundle: false,
                  },
                  Settings: null,
                  EditWidgets: [
                    {
                      Id: 'TextBox',
                      IsDefault: true,
                    },
                    {
                      Id: 'TextArea',
                      IsDefault: false,
                    },
                    {
                      Id: 'Email',
                      IsDefault: false,
                    },
                    {
                      Id: 'Url',
                      IsDefault: false,
                    },
                    {
                      Id: 'CommaSeparableComboBox',
                      IsDefault: false,
                    },
                  ],
                  DisplayWidgets: [
                    {
                      Id: 'Label',
                      IsDefault: true,
                    },
                    {
                      Id: 'IndicatorViewer',
                      IsDefault: false,
                    },
                  ],
                  SearchWidgets: [
                    {
                      Id: 'TextBox',
                      IsDefault: true,
                    },
                  ],
                },
                editWidgetId: 'TextBox',
                displayWidgetId: 'Label',
                searchWidgetId: 'TextBox',
                isValid: true,
              },
              {
                id: 0.44986848802692037,
                parentId: 0.07008070910353581,
                index: 5,
                control: {
                  Type: 2,
                  Attributes: {
                    fieldInstance: {
                      FieldInstanceId: 'HrmbL1zlM4xr9BfYUsClhQ',
                      Name: 'CountryName',
                      Label: 'CountryName',
                      Type: {
                        Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                        SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                        Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                        IsBundle: false,
                      },
                      Settings: null,
                      EditWidgets: [
                        {
                          Id: 'TextBox',
                          IsDefault: true,
                        },
                        {
                          Id: 'TextArea',
                          IsDefault: false,
                        },
                        {
                          Id: 'Email',
                          IsDefault: false,
                        },
                        {
                          Id: 'Url',
                          IsDefault: false,
                        },
                        {
                          Id: 'CommaSeparableComboBox',
                          IsDefault: false,
                        },
                      ],
                      DisplayWidgets: [
                        {
                          Id: 'Label',
                          IsDefault: true,
                        },
                        {
                          Id: 'IndicatorViewer',
                          IsDefault: false,
                        },
                      ],
                      SearchWidgets: [
                        {
                          Id: 'TextBox',
                          IsDefault: true,
                        },
                      ],
                    },
                    label: 'CountryName',
                  },
                  Code: 'TextBox',
                  DataIndex: 'CountryName',
                  Label: 'CountryName',
                  Required: false,
                  Rules: [],
                  SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                },
                orderIndex: 1,
                isFieldBindableWidget: true,
                correspondingFieldInstance: {
                  FieldInstanceId: 'HrmbL1zlM4xr9BfYUsClhQ',
                  Name: 'CountryName',
                  Label: 'CountryName',
                  Type: {
                    Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                    SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                    Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                    IsBundle: false,
                  },
                  Settings: null,
                  EditWidgets: [
                    {
                      Id: 'TextBox',
                      IsDefault: true,
                    },
                    {
                      Id: 'TextArea',
                      IsDefault: false,
                    },
                    {
                      Id: 'Email',
                      IsDefault: false,
                    },
                    {
                      Id: 'Url',
                      IsDefault: false,
                    },
                    {
                      Id: 'CommaSeparableComboBox',
                      IsDefault: false,
                    },
                  ],
                  DisplayWidgets: [
                    {
                      Id: 'Label',
                      IsDefault: true,
                    },
                    {
                      Id: 'IndicatorViewer',
                      IsDefault: false,
                    },
                  ],
                  SearchWidgets: [
                    {
                      Id: 'TextBox',
                      IsDefault: true,
                    },
                  ],
                },
                editWidgetId: 'TextBox',
                displayWidgetId: 'Label',
                searchWidgetId: 'TextBox',
                isValid: true,
              },
            ],
          },
          Code: 'TableExEditor',
          DataIndex: 'Grid1',
          Label: 'Grid1',
          Required: false,
          Rules: [],
          SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
        },
        orderIndex: 0,
        isFieldBindableWidget: true,
        correspondingFieldInstance: {
          FieldInstanceId: 'X8HpUEDMmWdjsK0cmdaagg',
          Name: 'Grid1',
          Label: 'Grid1',
          Type: {
            Guid: '48d1770c-c16a-4cf7-97ea-63be4a35537b',
            SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
            Name: 'DynamicDataModel_BundleDisplayName',
            IsBundle: true,
          },
          Settings: '',
          EditWidgets: [
            {
              Id: 'TableExEditor',
              IsDefault: true,
            },
          ],
          DisplayWidgets: [
            {
              Id: 'TableExViewer',
              IsDefault: true,
            },
          ],
          SearchWidgets: [
            {
              Id: 'TableExEditor',
              IsDefault: true,
            },
          ],
        },
        editWidgetId: 'TableExEditor',
        displayWidgetId: 'TableExViewer',
        searchWidgetId: 'TableExEditor',
        isValid: true,
      },
      {
        id: 0.051512334254858905,
        parentId: 0.19540226172476705,
        index: 1,
        control: {
          Identifier: '0.44301354509883684',
          Type: 1,
          Code: 'FormRow',
          Attributes: {
            cols: [12, 12],
          },
          Children: [],
        },
        orderIndex: 1,
        isValid: true,
      },
      {
        id: 0.19070734599361994,
        parentId: 0.051512334254858905,
        index: 1,
        control: {
          Identifier: '0.22960751142591818',
          Type: 1,
          Code: 'Col',
          Attributes: {
            col: 12,
          },
          Children: [],
        },
        orderIndex: 1,
        isValid: true,
      },
      {
        id: 0.9931355434307865,
        parentId: 0.051512334254858905,
        index: 1,
        control: {
          Identifier: '0.8622276179901889',
          Type: 1,
          Code: 'Col',
          Attributes: {
            col: 12,
          },
          Children: [],
        },
        orderIndex: 1,
        isValid: true,
      },
      {
        id: 0.9092185716929777,
        parentId: 0.19070734599361994,
        index: 7,
        control: {
          Type: 2,
          Attributes: {
            fieldInstance: {
              FieldInstanceId: 'NWXRxb0n4lrrlSA98cZ8Cw',
              Name: 'Name1',
              Label: 'Name',
              Type: {
                Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                IsBundle: false,
              },
              Settings: null,
              EditWidgets: [
                {
                  Id: 'TextBox',
                  IsDefault: true,
                },
                {
                  Id: 'TextArea',
                  IsDefault: false,
                },
                {
                  Id: 'Email',
                  IsDefault: false,
                },
                {
                  Id: 'Url',
                  IsDefault: false,
                },
                {
                  Id: 'CommaSeparableComboBox',
                  IsDefault: false,
                },
              ],
              DisplayWidgets: [
                {
                  Id: 'Label',
                  IsDefault: true,
                },
                {
                  Id: 'IndicatorViewer',
                  IsDefault: false,
                },
              ],
              SearchWidgets: [
                {
                  Id: 'TextBox',
                  IsDefault: true,
                },
              ],
            },
            label: 'Name',
          },
          Code: 'TextBox',
          DataIndex: 'Name1',
          Label: 'Name',
          Required: false,
          Rules: [],
          SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
        },
        orderIndex: 0,
        isFieldBindableWidget: true,
        correspondingFieldInstance: {
          FieldInstanceId: 'NWXRxb0n4lrrlSA98cZ8Cw',
          Name: 'Name1',
          Label: 'Name',
          Type: {
            Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
            SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
            Name: 'DynamicDataModel_StringFieldTypeDisplayName',
            IsBundle: false,
          },
          Settings: null,
          EditWidgets: [
            {
              Id: 'TextBox',
              IsDefault: true,
            },
            {
              Id: 'TextArea',
              IsDefault: false,
            },
            {
              Id: 'Email',
              IsDefault: false,
            },
            {
              Id: 'Url',
              IsDefault: false,
            },
            {
              Id: 'CommaSeparableComboBox',
              IsDefault: false,
            },
          ],
          DisplayWidgets: [
            {
              Id: 'Label',
              IsDefault: true,
            },
            {
              Id: 'IndicatorViewer',
              IsDefault: false,
            },
          ],
          SearchWidgets: [
            {
              Id: 'TextBox',
              IsDefault: true,
            },
          ],
        },
        editWidgetId: 'TextBox',
        displayWidgetId: 'Label',
        searchWidgetId: 'TextBox',
        isValid: true,
      },
      {
        id: 0.001716380594920297,
        parentId: 0.9931355434307865,
        index: 8,
        control: {
          Type: 2,
          Attributes: {
            fieldInstance: {
              FieldInstanceId: 'HkrxVY4Kk4UgfDsNSekLag',
              Name: 'Ashar',
              Label: 'Ashar',
              Type: {
                Guid: '43a04185-07f5-464b-b82b-46548cae0ebc',
                SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                Name: 'DynamicDataModel_DecimalFieldTypeDisplayName',
                IsBundle: false,
              },
              Settings: { NumericPrecision: 4, NumericScale: 4 },
              EditWidgets: [
                {
                  Id: 'InputDecimal',
                  IsDefault: true,
                },
              ],
              DisplayWidgets: [
                {
                  Id: 'Label',
                  IsDefault: true,
                },
              ],
              SearchWidgets: [
                {
                  Id: 'InputDecimal',
                  IsDefault: true,
                },
              ],
            },
            label: 'Ashar',
          },
          Code: 'InputDecimal',
          DataIndex: 'Ashar',
          Label: 'Ashar',
          Required: false,
          Rules: [
            {
              pattern: '^[0-9]+\\.[0-9]+$',
            },
          ],
          SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
        },
        orderIndex: 1,
        isFieldBindableWidget: true,
        correspondingFieldInstance: {
          FieldInstanceId: 'HkrxVY4Kk4UgfDsNSekLag',
          Name: 'Ashar',
          Label: 'Ashar',
          Type: {
            Guid: '43a04185-07f5-464b-b82b-46548cae0ebc',
            SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
            Name: 'DynamicDataModel_DecimalFieldTypeDisplayName',
            IsBundle: false,
          },
          Settings: { NumericPrecision: 4, NumericScale: 4 },
          EditWidgets: [
            {
              Id: 'InputDecimal',
              IsDefault: true,
            },
          ],
          DisplayWidgets: [
            {
              Id: 'Label',
              IsDefault: true,
            },
          ],
          SearchWidgets: [
            {
              Id: 'InputDecimal',
              IsDefault: true,
            },
          ],
        },
        editWidgetId: 'InputDecimal',
        displayWidgetId: 'Label',
        searchWidgetId: 'InputDecimal',
        isValid: true,
      },
    ],
    LayoutItems: [
      {
        Id: 'FQ7MHfKRjHN8mNLmkmnIaw',
        FieldInstance: {
          FieldInstanceId: 'X8HpUEDMmWdjsK0cmdaagg',
          Name: 'Grid1',
          Label: 'Grid1',
          Type: {
            Guid: '48d1770c-c16a-4cf7-97ea-63be4a35537b',
            SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
            Name: 'DynamicDataModel_BundleDisplayName',
            IsBundle: true,
          },
          Settings: '',
          EditWidgets: [
            {
              Id: 'TableExEditor',
              IsDefault: true,
            },
          ],
          DisplayWidgets: [
            {
              Id: 'TableExViewer',
              IsDefault: true,
            },
          ],
          SearchWidgets: [
            {
              Id: 'TableExEditor',
              IsDefault: true,
            },
          ],
        },
        LayoutItemDefaultValue: null,
        EditWidgetId: 'TableExEditor',
        DisplayWidgetId: 'TableExEditor',
        SearchWidgetId: 'TableExEditor',
        IsBundle: true,
        Relation: null,
        LayoutItems: [
          {
            Id: '-STS8kw602mTXdqJ6O8pSg',
            FieldInstance: {
              FieldInstanceId: 'ZTrrF0Kz5TI7kZMLRJG6jA',
              Name: 'CountryName',
              Label: 'CountryName',
              Type: {
                Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                IsBundle: false,
              },
              Settings: null,
              EditWidgets: [
                {
                  Id: 'TextBox',
                  IsDefault: true,
                },
                {
                  Id: 'TextArea',
                  IsDefault: false,
                },
                {
                  Id: 'Email',
                  IsDefault: false,
                },
                {
                  Id: 'Url',
                  IsDefault: false,
                },
                {
                  Id: 'CommaSeparableComboBox',
                  IsDefault: false,
                },
              ],
              DisplayWidgets: [
                {
                  Id: 'Label',
                  IsDefault: true,
                },
                {
                  Id: 'IndicatorViewer',
                  IsDefault: false,
                },
              ],
              SearchWidgets: [
                {
                  Id: 'TextBox',
                  IsDefault: true,
                },
              ],
            },
            LayoutItemDefaultValue: null,
            EditWidgetId: 'TextBox',
            DisplayWidgetId: 'Label',
            SearchWidgetId: 'TextBox',
            IsBundle: false,
            Relation: null,
            LayoutItems: [],
          },
          {
            Id: 'A2fpgXgsrD_I-LtfkawSfA',
            FieldInstance: {
              FieldInstanceId: 'dMseCgLNgsmlgWC01m39GQ',
              Name: 'CountryCode',
              Label: '2CountryCode',
              Type: {
                Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
                SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
                Name: 'DynamicDataModel_StringFieldTypeDisplayName',
                IsBundle: false,
              },
              Settings: null,
              EditWidgets: [
                {
                  Id: 'TextBox',
                  IsDefault: true,
                },
                {
                  Id: 'TextArea',
                  IsDefault: false,
                },
                {
                  Id: 'Email',
                  IsDefault: false,
                },
                {
                  Id: 'Url',
                  IsDefault: false,
                },
                {
                  Id: 'CommaSeparableComboBox',
                  IsDefault: false,
                },
              ],
              DisplayWidgets: [
                {
                  Id: 'Label',
                  IsDefault: true,
                },
                {
                  Id: 'IndicatorViewer',
                  IsDefault: false,
                },
              ],
              SearchWidgets: [
                {
                  Id: 'TextBox',
                  IsDefault: true,
                },
              ],
            },
            LayoutItemDefaultValue: null,
            EditWidgetId: 'TextBox',
            DisplayWidgetId: 'Label',
            SearchWidgetId: 'TextBox',
            IsBundle: false,
            Relation: null,
            LayoutItems: [],
          },
        ],
      },
      {
        Id: 'VRR900aD1tKpSJGfivtJ7A',
        FieldInstance: {
          FieldInstanceId: 'NWXRxb0n4lrrlSA98cZ8Cw',
          Name: 'Name1',
          Label: 'Name',
          Type: {
            Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
            SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
            Name: 'DynamicDataModel_StringFieldTypeDisplayName',
            IsBundle: false,
          },
          Settings: null,
          EditWidgets: [
            {
              Id: 'TextBox',
              IsDefault: true,
            },
            {
              Id: 'TextArea',
              IsDefault: false,
            },
            {
              Id: 'Email',
              IsDefault: false,
            },
            {
              Id: 'Url',
              IsDefault: false,
            },
            {
              Id: 'CommaSeparableComboBox',
              IsDefault: false,
            },
          ],
          DisplayWidgets: [
            {
              Id: 'Label',
              IsDefault: true,
            },
            {
              Id: 'IndicatorViewer',
              IsDefault: false,
            },
          ],
          SearchWidgets: [
            {
              Id: 'TextBox',
              IsDefault: true,
            },
          ],
        },
        LayoutItemDefaultValue: null,
        EditWidgetId: 'TextBox',
        DisplayWidgetId: 'Label',
        SearchWidgetId: 'TextBox',
        IsBundle: false,
        Relation: null,
        LayoutItems: [],
      },
      {
        Id: 'n4gsfvUXSV9NkyV8FXIPeQ',
        FieldInstance: {
          FieldInstanceId: 'HkrxVY4Kk4UgfDsNSekLag',
          Name: 'Ashar',
          Label: 'Ashar',
          Type: {
            Guid: '43a04185-07f5-464b-b82b-46548cae0ebc',
            SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac',
            Name: 'DynamicDataModel_DecimalFieldTypeDisplayName',
            IsBundle: false,
          },
          Settings: { NumericPrecision: 4, NumericScale: 4 },
          EditWidgets: [
            {
              Id: 'InputDecimal',
              IsDefault: true,
            },
          ],
          DisplayWidgets: [
            {
              Id: 'Label',
              IsDefault: true,
            },
          ],
          SearchWidgets: [
            {
              Id: 'InputDecimal',
              IsDefault: true,
            },
          ],
        },
        LayoutItemDefaultValue: null,
        EditWidgetId: 'InputDecimal',
        DisplayWidgetId: 'Label',
        SearchWidgetId: 'InputDecimal',
        IsBundle: false,
        Relation: null,
        LayoutItems: [],
      },
    ],
    formData: {
      Guid: 'Zn21LZKbTxMxQsbmlfBM_pBaaaCiqZx74SsFxRkS1cM',
      ParentGuid: 'iXLbVR3r4Hbl1frPWIA7ZO2SuhVq2sKceynOzU_BuxM',
      KeyValues: {
        Name1: 'Abbasaa',
        Ashar: 123.4,
        Grid1: [
          {
            CountryName: 'ww',
            CountryCode: 'wqwq',
            Guid: 'ifbWhWmorTmC2lS2NPjG1ovssstYkVulijv2Y_3-Iuo',
          },
          {
            CountryName: 'www',
            CountryCode: 'wqwq',
            Guid: 'L9_uvUU0iz_fW1YUA2zGMK7EsYROHhaLO0-QBe-MOD8',
          },
        ],
      },
    },
  };

export default exampleDataStructure;