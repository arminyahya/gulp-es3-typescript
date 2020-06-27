import * as $ from 'jquery'

export const createAjaxReq = (url = '', method = '', data = {}, options = {}, isSentDataJson = true) => {
  const req = $.ajax({
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    url: createApiUrl(url),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    method: method,
    data: isSentDataJson ? JSON.stringify(data) : data,
  })

  req.fail(ajaxFailHandler)
  return req
}

export const createApiUrl = (url: string) => {
  return 'replace me with api'
}

export const ajaxFailHandler = () => {
  console.log('failed')
}
