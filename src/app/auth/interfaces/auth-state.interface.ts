export interface AuthStateInterface {
    authErrorMessage: string,
    accessToken: string,
    refreshToken: string,
    accessTokenExpirationDate: Date | null,
    refreshTokenExpirationDate: Date | null
}
