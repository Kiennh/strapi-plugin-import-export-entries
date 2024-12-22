export const dataFormats = {
  CSV: 'csv',
  JSON: 'json',
  XLSX: 'xlsx',
  JSON_V2: 'json-v2',
};

export const dataFormatConfigs = {
  [dataFormats.CSV]: {
    fileExt: 'csv',
    fileContentType: 'text/csv',
    language: 'csv',
  },
  [dataFormats.JSON]: {
    fileExt: 'json',
    fileContentType: 'application/json',
    language: 'json',
  },
  [dataFormats.JSON_V2]: {
    fileExt: 'json',
    fileContentType: 'application/json',
    language: 'json',
  },
  [dataFormats.XLSX]: {
    fileExt: 'xlsx',
    fileContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    language: 'api',
  },
};
