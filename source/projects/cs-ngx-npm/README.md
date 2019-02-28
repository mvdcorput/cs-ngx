##### Tested in Angular 7.1.0

# @cosoft/ngx

Handy ngx stuff

## Contents

* npm install
* cs-ngx.module
  * ripple directive ([Plunker demo](https://embed.plnkr.co/XYwmPbCN6kUhGIhUczRg/ "Plunker demo of directive"))
* json date http interceptor

## Npm install cs-ngx in your angular application
```bash
npm install @cosoft/ngx --save
```

## Import cs-ngx module in your ngx module
```typescript
import { CsNgxModule } from '@cosoft/ngx';

// ...

@NgModule({
  bootstrap: [ /* ... */ ],
  declarations: [ /* ... */ ],
  imports: [
    /* ... */
    CsNgxModule
  ],
})
export class AppModule { /* ... */ }
```

## cs-ripple directive 
#### To use this directive first import cs-ngx module ([Plunker demo](https://embed.plnkr.co/XYwmPbCN6kUhGIhUczRg/ "Plunker demo of directive"))

```html
<div cs-ripple>MENU ITEM</div>
```

## json date http interceptor
If you use HttpClient from '@angular/common/http' in your data service then this interceptor will convert json dates to javascript Date objects. 

It checks for content type 'application/json' http responses and uses regex to find dates using iso8601 format.

With this interceptor you don't have to convert json dates coming from (dotnet core) http responses anymore.

### Add interceptor to your ngx module
```typescript
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonDateHttpInterceptor } from '@cosoft/ngx';

// ...

@NgModule({
  bootstrap: [ /* ... */ ],
  declarations: [ /* ... */ ],
  imports: [
    /* ... */
    HttpClientModule
  ],
  providers: [
    /* ... */
    { provide: HTTP_INTERCEPTORS, useClass: JsonDateHttpInterceptor, multi: true }
  ]
})
export class AppModule { /* ... */ }
```