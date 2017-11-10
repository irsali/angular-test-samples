//Automatic change detection

```ts
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

providers: [ { provide: ComponentFixtureAutoDetect, useValue: true } ]
```