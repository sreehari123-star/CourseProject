import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthsGuard } from './auth/auths.guard';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
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
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudhomeComponent } from './studhome/studhome.component';
import { ProfhomeComponent } from './profhome/profhome.component';

const routes: Routes = [
  { 
    path:'',
    component:HomeComponent 
  },
  {
     path:'user',
     component:UserComponent,
children:[
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'userprofile',
    component:UserProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'enroll',
    component:EnrollComponent
  },
  {
    path:'notify',
    component:NotifyComponent
  }
]
},
  {
    path:'professor',
    canActivate:[AuthsGuard],
    component:ProfessorComponent,
children:[
  {
    path:'addcourse',
    component:AddcourseComponent
  },
  {
    path:'studlist',
    component:StudlistComponent
  },
  {
    path:'mentor',
    component:MentorComponent
  }
]},
  {
    path:'signup', 
    component:SignUpComponent
  },
  {
    path:'login', 
    component:SignInComponent
  },
  {
    path:'mentorsignup',
    component:MentorsignupComponent
  },
  {
    path:'mentorsignin',
    component:MentorsigninComponent
  },
  {
    path:'status',
    component:ApproveComponent
  },
  {
    path:'courses',
    component:CourseComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'programming',
    component:ProgrammingComponent
  },
  {
    path:'institutional',
    component:InstitutionalComponent
  },
  {
    path:'general',
    component:GeneralComponent
  },
  {
    path:'retail',
    component:RetailComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'skill',
    component:SkillComponent
  },
  {
    path:'microskills',
    component:MicroskillsComponent
  },
  {
    path:'fsd',
    component:FsdComponent
  },
  {
    path:'coding',
    component:CodingComponent
  },
  {
    path:'orientation',
    component:OrientComponent
  },
  {
    path:'studhome',
    component:StudhomeComponent
  },
  {
    path:'profhome',
    canActivate:[AuthsGuard],
    component:ProfhomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
