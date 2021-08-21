//built-in modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthService } from './shared/auth.service';
import { AuthsGuard } from './auth/auths.guard';

//component modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfessorComponent } from './professor/professor.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { EnrollComponent } from './enroll/enroll.component';
import { StudlistComponent } from './studlist/studlist.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { MentorComponent } from './mentor/mentor.component';
import { MentorsigninComponent } from './mentorsignin/mentorsignin.component';
import { NotifyComponent } from './notify/notify.component';
import { ApproveComponent } from './approve/approve.component';
import { CourseComponent } from './course/course.component';
import { ProgrammingComponent } from './programming/programming.component';
import { InstitutionalComponent } from './institutional/institutional.component';
import { GeneralComponent } from './general/general.component';
import { RetailComponent } from './retail/retail.component';
import { TestComponent } from './test/test.component';
import { SkillComponent } from './skill/skill.component';
import { MicroskillsComponent } from './microskills/microskills.component';
import { FsdComponent } from './fsd/fsd.component';
import { CodingComponent } from './coding/coding.component';
import { OrientComponent } from './orient/orient.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudhomeComponent } from './studhome/studhome.component';
import { ProfhomeComponent } from './profhome/profhome.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    ProfessorComponent,
    AddcourseComponent,
    EnrollComponent,
    StudlistComponent,
    MentorsignupComponent,
    MentorComponent,
    MentorsigninComponent,
    NotifyComponent,
    ApproveComponent,
    CourseComponent,
    ProgrammingComponent,
    InstitutionalComponent,
    GeneralComponent,
    RetailComponent,
    TestComponent,
    SkillComponent,
    MicroskillsComponent,
    FsdComponent,
    CodingComponent,
    OrientComponent,
    FooterComponent,
    AboutusComponent,
    StudhomeComponent,
    ProfhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
   }, UserService,AuthGuard,AuthsGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
