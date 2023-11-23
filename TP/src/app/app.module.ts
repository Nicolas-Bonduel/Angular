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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
