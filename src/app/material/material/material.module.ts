import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRippleModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatChipsModule} from '@angular/material/chips';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatListModule} from '@angular/material/list';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSelectModule} from '@angular/material/select';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';


const MAT_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatRippleModule,
  MatExpansionModule,
  MatTabsModule
];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...MAT_MODULES],
  exports: [...MAT_MODULES]
})
export class MaterialModule {}
