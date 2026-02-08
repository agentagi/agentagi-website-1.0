// Jupiter Terminal Type Declarations
declare global {
  interface Window {
    Jupiter?: {
      init: (config: JupiterTerminalConfig) => void;
    };
  }
}

interface JupiterTerminalConfig {
  displayMode: 'integrated' | 'modal' | 'widget';
  integratedTargetId: string;
  endpoint: string;
  formProps?: {
    fixedInputMint?: boolean;
    fixedOutputMint?: boolean;
    initialInputMint?: string;
    initialOutputMint?: string;
  };
  defaultExplorer?: 'Solscan' | 'Solana Explorer';
  strictTokenList?: boolean;
  passThroughWallet?: boolean;
  containerStyles?: {
    maxHeight?: string;
  };
  widgetStyle?: {
    size?: 'default' | 'sm';
    theme?: {
      palette?: {
        primary?: string;
        secondary?: string;
        background?: string;
        text?: string;
      };
      borderRadius?: string;
    };
  };
}

export {};
