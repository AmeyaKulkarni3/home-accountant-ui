export interface GoogleCredentialResponse {
  credential: string;
  select_by: string;
}

export interface GoogleAccountsId {
  initialize(config: {
    client_id: string;
    callback: (response: GoogleCredentialResponse) => void;
  }): void;

  renderButton(
    parent: HTMLElement,
    options: {
      theme?: string;
      size?: string;
      text?: string;
      shape?: string;
      width?: number;
    },
  ): void;

  prompt(): void;
}

export interface GoogleApi {
  accounts: {
    id: GoogleAccountsId;
  };
}
