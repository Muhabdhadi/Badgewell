export interface AuthStateInterface {
    authErrorMessage: string,
    accessToken: string,
    refreshToken: string,
    authSuccessMessage: string
    accessTokenExpirationDate: Date | null,
    refreshTokenExpirationDate: Date | null
}
