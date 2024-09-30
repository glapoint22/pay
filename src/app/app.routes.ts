import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'sign-in',
        loadComponent: () => import('./sign-in/sign-in.component').then(m => m.SignInComponent)
    },
    {
        path: 'transactions',
        loadComponent: () => import('./transactions/transactions.component').then(m => m.TransactionsComponent)
    },
    {
        path: 'outbound-payments',
        loadComponent: () => import('./outbound-payments/outbound-payments.component').then(m => m.OutboundPaymentsComponent)
    },
    {
        path: 'reconciliation',
        loadComponent: () => import('./reconciliation/reconciliation.component').then(m => m.ReconciliationComponent)
    },
    {
        path: 'over-threshold',
        loadComponent: () => import('./over-threshold/over-threshold.component').then(m => m.OverThresholdComponent)
    },
    {
        path: 'payors',
        loadComponent: () => import('./payors/payors.component').then(m => m.PayorsComponent)
    },
    {
        path: 'user-management',
        loadComponent: () => import('./user-management/user-management.component').then(m => m.UserManagementComponent)
    },
    {
        path: 'banners-alerts',
        loadComponent: () => import('./banners-alerts/banners-alerts.component').then(m => m.BannersAlertsComponent)
    }
];
