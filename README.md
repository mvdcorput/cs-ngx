##### Tested in Angular 7.1.0

# cs-ngx

## Contents

- cs-ngx demo
- cs-ngx project

## cs-ngx demo

### Run demo from /source folder
```bash
npm start
```

## cs-ngx module

### Install cs-ngx in your angular application root folder
```bash
npm install @cosoft/ngx --save
```

### Import cs-ngx module in your ngx project
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

## cs-ngx : cs-ripple directive
```html
<div cs-ripple>MENU ITEM</div>
```
