import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { hljsLanguages } from './app.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CallbackComponent } from './containers/callback/callback.component';
import { HomeComponent } from './containers/home/home.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { ExternalApiComponent } from './containers/external-api/external-api.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        NgbModule,
        FontAwesomeModule,
        HighlightModule.forRoot({
          languages: hljsLanguages
        })
      ],
      declarations: [
        HomeComponent,
        CallbackComponent,
        AppComponent,
        HeroComponent,
        HomeContentComponent,
        LoadingComponent,
        ProfileComponent,
        NavBarComponent,
        FooterComponent,
        ExternalApiComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'login-demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('login-demo');
  });

  it('should render title in a h1 tag', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    const fixture = TestBed.createComponent(AppComponent);
    fixture.ngZone.run(() => {
      router.initialNavigation();
    });
    tick();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to login-demo!'
    );
  }));
});
