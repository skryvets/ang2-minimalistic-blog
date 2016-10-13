import { AppComponent } from "../app.component";
import { LoginService } from "../service/login.service";

describe( 'AppComponent Test Suite', () => {

  let loginService = new LoginService();
  let appComponent = new AppComponent( loginService );


  it( "Login Service was initialized", () => {
    expect( loginService ).toBeTruthy();
  } );

  it( "App Component was initialized", () => {
    expect( appComponent ).toBeTruthy();
  } );

  it('Observable test using EventEmitter ', done => {
    loginService.loginEmitter.subscribe(x => {
      expect(x).toBe(true);
      done();
    });
    loginService.loginEmitter.emit(true);
  });

  it( "Variable isLogin exist and it's false by default", () => {
    expect( appComponent.isLogin ).toBeFalsy();
  } );

  it( "Function isReady() is exist and always return true", () => {
    expect( appComponent.isReady() ).toBeTruthy();
  } );

  it( "Function ngOnInit() is exist", () => {
    expect( appComponent.ngOnInit ).toBeTruthy();
  } );

  it( "Function ngOnInit() returns undefined", () => {
    expect( appComponent.ngOnInit() ).toBeUndefined();
  } );

  it( "Function ngOnInit() contains loginEmitter from loginService", () => {
    expect( appComponent.ngOnInit ).toMatch("this.loginService.loginEmitter");
  } );

  it( "Function AfterViewInit() is exist", () => {
    expect( appComponent.ngAfterViewInit ).toBeTruthy();
  } );

  it( "Function AfterViewInit() returns undefined", () => {
    expect( appComponent.ngAfterViewInit() ).toBeUndefined();
  } );

  it( "Function AfterViewInit() contains function isReady()", () => {
    expect( appComponent.ngAfterViewInit ).toMatch("this.isReady()");
  } );

} );
