import { Routes } from '@angular/router';
import { SuperAdminLoginComponent } from './components/super-admin-login/super-admin-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { ViewAdminComponent } from './components/view-admin/view-admin.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { DeleteAdminComponent } from './components/delete-admin/delete-admin.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { AdminUserLoginComponent } from './components/admin-user-login/admin-user-login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard/user-dashboard.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { CompanyManagementComponent } from './components/company-management/company-management.component';
import { DashboardRightSideComponent } from './components/dashboard/dashboard-right-side/dashboard-right-side.component';
import { SuperadminToggleComponent } from './components/superadmin-toggle/superadmin-toggle.component';
import { DashboardSidenavComponent } from './components/dashboard-sidenav/dashboard-sidenav.component';
import { ViewCompanyManagementComponent } from './components/company-management/view-company-management/view-company-management.component';
import { DashboardAdminComponent } from './components/admin-dashboard/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './components/user-dashboard/dashboard-user/dashboard-user.component';
import { AssignUserMenuComponent } from './components/admin-dashboard/dashboard-admin/components/user-menu-assignment/assign-user-menu/assign-user-menu.component';
import { ManageUserMenuComponent } from './components/admin-dashboard/dashboard-admin/components/user-menu-assignment/manage-user-menu/manage-user-menu.component';
import { CreateUserMenuComponent } from './components/admin-dashboard/dashboard-admin/components/user-menu/create-user-menu/create-user-menu.component';
import { CreateUserComponent } from './components/admin-dashboard/dashboard-admin/components/User/create-user/create-user.component';
import { CompanDbSelectionComponent } from './components/compan-db-selection/compan-db-selection.component';
import { AdminDashboardHomeComponent } from './components/admin-dashboard-home/admin-dashboard-home.component';
import { TestLoginComponent } from './components/test-login/test-login.component';
import { ViewPurchaseOrderComponent } from './components/view-purchase-order/view-purchase-order.component';
import { UserDashboardHomeComponent } from './components/user-dashboard-home/user-dashboard-home.component';
import { TestDesignComponent } from './components/test-design/test-design.component';
import { ViewUpdateUserComponent } from './components/admin-dashboard/dashboard-admin/components/User/view-update-user/view-update-user.component';
import { PoGenerationComponent } from './components/po-generation/po-generation.component';
import { DistributorRegistrationComponent } from './components/distributor-registration/distributor-registration.component';


export const routes: Routes = [

 


    { path: '', component: SuperAdminLoginComponent },
    { path: 'dashboard', component: DashboardSidenavComponent },

    // { path: 'superadmin-toggle', component: SuperadminToggleComponent },
    { path: 'view-companies',component: ViewCompanyManagementComponent},

    {
      path: 'side-nav',
      component: DashboardSidenavComponent,
      children: [
        { path: 'view-admin', component: ViewAdminComponent },
        {path:'create-company',component:CompanyManagementComponent},
        {path: 'create-admin',component:CreateAdminComponent},
        {path: 'view-admin',component:ViewAdminComponent},
        {path:'delete-admin',component:DeleteAdminComponent},
        {path:'right-side',component:DashboardRightSideComponent},
        { path: 'create-company/:id', component: CompanyManagementComponent },
        {path:'test-design',component:TestDesignComponent}
        
      ]
    },

    {path:'user-login',component:AdminUserLoginComponent},
    
    {path:'user-dashboard',component:UserDashboardComponent},
    {path:'purchase-order',component:PurchaseOrderComponent},

    {path:'dashboard-admin',
      component:DashboardAdminComponent,
      children:[
        {path:'create-user',component:CreateUserComponent},
        {path:'create-roleMenu',component:CreateUserMenuComponent},
        {path:'assign-roleMenu',component:AssignUserMenuComponent},
        {path:'view-user-Menu',component:ManageUserMenuComponent},
        {path:'admin-dashboard-home',component:AdminDashboardHomeComponent}
      ]
    },
  
    {path:'test-login',component:TestLoginComponent},
    {path:'dashboard-user',
      component:DashboardUserComponent,
      children:[
      {path:'purchase-order',component:PurchaseOrderComponent},
      {path:'view-purchase-order',component:ViewPurchaseOrderComponent}, 
      {path:'user-dashboard-home',component:UserDashboardHomeComponent},
       {path:'purchase-order-create',component:PoGenerationComponent},
       {path:'distributor-create',component:DistributorRegistrationComponent}
      ]

    },
    {path:'user-dashboard',component:UserDashboardComponent},

    {path: 'assign-usermenu',component: AssignUserMenuComponent},
    {path:'userMenu',component :CreateUserMenuComponent},
    {path: 'manage-usermenus',component: ManageUserMenuComponent},

    {
      path: 'login',
      component: AdminUserLoginComponent
    },

    {
      path:'login-new',component:LoginUserComponent
    },
    {
      path: 'user-dashboard',
      component: UserDashboardComponent
    },
    {
      path:'company-selection',
      component:CompanDbSelectionComponent
    },

    {
      path:'view-user-profile',
      component:ViewUpdateUserComponent
    }

];
