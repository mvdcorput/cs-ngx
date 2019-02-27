##### Tested in Angular 7

# @cosoft/ngx

Handy ngx stuff

## Contents

- cs-ngx.module
-- cs-ripple directive
- cs-json-data-http.interceptor 

## Install cs-ngx in your angular application
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
#### To use this directive first import cs-ngx module

```html
<div cs-ripple>MENU ITEM</div>
```

## cs-ngx json date http interceptor
This interceptor converts json dates to javascript Date objects

### Add interceptor to your ngx module
```typescript
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonDateHttpInterceptor } from '@cosoft/ngx';

// ...

@NgModule({
  bootstrap: [ /* ... */ ],
  declarations: [ /* ... */ ],
  imports: [
    /* ... */
    CsNgxModule
  ],
  providers: [
    /* ... */
    { provide: HTTP_INTERCEPTORS, useClass: JsonDateHttpInterceptor, multi: true }
  ]
})
export class AppModule { /* ... */ }
```