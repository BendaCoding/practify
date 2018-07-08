import { createStandardAction } from 'typesafe-actions';

export const downloadFile = createStandardAction('storage/UPLOAD_FILE')<IUploadFileRequest>();
