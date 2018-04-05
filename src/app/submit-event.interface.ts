export interface SubmitEvent {
  submitSuccess: boolean;
  submitFail: boolean;
  animationStart: boolean;
  animationEnd: boolean;
  failMsg?: string;
}
