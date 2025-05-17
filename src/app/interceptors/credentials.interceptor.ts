import { HttpInterceptorFn } from '@angular/common/http';

export const credentialsInterceptor: HttpInterceptorFn = (req, next) => {
  const dbName = sessionStorage.getItem('dbName');
  console.log("From interceptor — dbName:", dbName);

  if (dbName) {
    console.log("getting fb name from interceptor", dbName);
    const modifiedReq = req.clone({
      setHeaders: {
        'X-DB-Name': dbName
      }
    });
    return next(modifiedReq);
  }
  else{
    console.log("no db name found in session storage");
  }
  return next(req);
};
