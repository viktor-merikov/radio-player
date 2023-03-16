import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DevExtremeModule} from 'devextreme-angular';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoBoxComponent } from './components/video-box/video-box.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SongTextComponent } from './components/song-text/song-text.component';
import {AngularSplitModule} from 'angular-split';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        HeaderComponent,
        VideoBoxComponent,
        PlaylistComponent,
        SongTextComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DevExtremeModule,
        AngularSplitModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
