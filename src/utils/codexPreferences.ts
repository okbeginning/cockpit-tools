const CODEX_SHOW_CODE_REVIEW_QUOTA_STORAGE_KEY = 'agtools.codex_show_code_review_quota';
const CODEX_API_SWITCH_VISIBILITY_NOTICE_DISMISSED_KEY =
  'codexApiSwitchVisibilityNoticeDismissed';

export const CODEX_CODE_REVIEW_QUOTA_VISIBILITY_CHANGED_EVENT =
  'agtools:codex-code-review-quota-visibility-changed';

export function isCodexCodeReviewQuotaVisibleByDefault(): boolean {
  try {
    return localStorage.getItem(CODEX_SHOW_CODE_REVIEW_QUOTA_STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

export function persistCodexCodeReviewQuotaVisible(visible: boolean): void {
  try {
    localStorage.setItem(CODEX_SHOW_CODE_REVIEW_QUOTA_STORAGE_KEY, visible ? '1' : '0');
    window.dispatchEvent(
      new CustomEvent(CODEX_CODE_REVIEW_QUOTA_VISIBILITY_CHANGED_EVENT, { detail: visible }),
    );
  } catch {
    // ignore localStorage write failures
  }
}

export function isCodexApiSwitchVisibilityNoticeDismissed(): boolean {
  try {
    return localStorage.getItem(CODEX_API_SWITCH_VISIBILITY_NOTICE_DISMISSED_KEY) === 'true';
  } catch {
    return false;
  }
}

export function persistCodexApiSwitchVisibilityNoticeDismissed(dismissed: boolean): void {
  try {
    if (dismissed) {
      localStorage.setItem(CODEX_API_SWITCH_VISIBILITY_NOTICE_DISMISSED_KEY, 'true');
    } else {
      localStorage.removeItem(CODEX_API_SWITCH_VISIBILITY_NOTICE_DISMISSED_KEY);
    }
  } catch {
    // ignore localStorage write failures
  }
}
