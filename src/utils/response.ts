const success = (
  data: any,
  totalRow?: number,
  metaData?: any,
  message?: string,
) => {
  if (data.data) {
    totalRow = data.totalRow || totalRow;
    metaData = data.metaData ? data.metaData : metaData;
    data = data.data || data;
  }
  return {
    success: true,
    errorCode: 0,
    message: message || '',
    data,
    totalRow: totalRow || 0,
    metaData,
  };
};
const error = (err?: { message: string; errorCode: number; metaData?: any }) =>
  // const obj = _.find(err.err, {errorCode: errorCode});
  // eslint-disable-next-line implicit-arrow-linebreak
  ({
    success: false,
    errorCode: err.errorCode || 500,
    message: err.message,
    data: null,
    totalRow: 0,
    metaData: err.metaData,
  });
export const response = { success, error };
