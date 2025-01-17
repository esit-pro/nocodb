export const NC_LICENSE_KEY = 'nc-license-key';
export const NC_APP_SETTINGS = 'nc-app-settings';
export const NC_NON_ATTACHMENT_FIELD_SIZE =
  +process.env['NC_NON_ATTACHMENT_FIELD_SIZE'] || 10 * 1024 * 1024; // 10 MB
export const NC_ATTACHMENT_FIELD_SIZE =
  +process.env['NC_ATTACHMENT_FIELD_SIZE'] || 20 * 1024 * 1024; // 20 MB
export const NC_MAX_ATTACHMENTS_ALLOWED =
  +process.env['NC_MAX_ATTACHMENTS_ALLOWED'] || 10;
