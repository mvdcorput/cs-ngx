export const iso8601 = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;

export function convertJsonDates(data: object) {
  if (data === null || data === undefined) {
    return data;
  }

  if (typeof data !== 'object') {
    return data;
  }

  for (const key of Object.keys(data)) {
    const value = data[key];

    if (isIso8601(value)) {
      data[key] = new Date(value);
    } else if (typeof value === 'object') {
      data[key] = convertJsonDates(value);
    }
  }

  return data;
}

export function isIso8601(dateString: string) {
  if (dateString === null || dateString === undefined) {
    return false;
  }

  return iso8601.test(dateString);
}