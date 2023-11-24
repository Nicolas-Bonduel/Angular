import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { TagsFilterPipe } from './pipes/tags-filter.pipe';
import { ProductNavigationComponent } from './components/content/product-navigation/product-navigation/product-navigation.component';
import { SingleProductComponent } from './components/content/single-product/single-product/single-product.component';
import { MinicartComponent } from './components/header/minicart/minicart.component';
import { MinicartItemComponent } from './components/header/minicart/minicart-item/minicart-item.component';
import { MinicartItemsComponent } from './components/header/minicart-items/minicart-items.component';
import { CartItemsTotalPipe } from './pipes/cart-items-total.pipe';
import { CartItemsFilterPipe } from './pipes/cart-items-filter.pipe';
import { FormProductSearchComponent } from './components/forms/form-product-search/form-product-search.component';
import { FormsModule } from '@angular/forms';
import { SectionsFilterPipe } from './pipes/sections-filter.pipe';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ProductsFilterPipe,
    TagsFilterPipe,
    ProductNavigationComponent,
    SingleProductComponent,
    MinicartComponent,
    MinicartItemComponent,
    MinicartItemsComponent,
    CartItemsTotalPipe,
    CartItemsFilterPipe,
    FormProductSearchComponent,
    SectionsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
