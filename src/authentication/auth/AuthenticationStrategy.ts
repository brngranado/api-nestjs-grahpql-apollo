export interface AuthenticationStrategy {
  authenticate(request: any): Promise<any>;
}
