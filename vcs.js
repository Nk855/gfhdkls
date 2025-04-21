const VCS = (() => {
  const LOG_KEY = 'vcs-log';

  function getFileContent(selector) {
    const el = document.querySelector(selector);
    return el ? el.outerHTML : '';
  }

  function init() {
    if (!localStorage.getItem(LOG_KEY)) {
      localStorage.setItem(LOG_KEY, JSON.stringify([]));
      console.log('%cVCS initialized!', 'color: green');
    } else {
      console.log('%cVCS already initialized.', 'color: orange');
    }
  }

  function commit(message = 'No message') {
    const versionId = 'vcs-' + Date.now();
    const timestamp = new Date().toLocaleString();

    const version = {
      id: versionId,
      message,
      timestamp,
      html: document.documentElement.outerHTML,
    };

    localStorage.setItem(versionId, JSON.stringify(version));

    const log = JSON.parse(localStorage.getItem(LOG_KEY)) || [];
    log.push({ id: versionId, message, timestamp });
    localStorage.setItem(LOG_KEY, JSON.stringify(log));

    console.log(`%cCommitted as ${versionId}`, 'color: green');
  }

  function log() {
    const log = JSON.parse(localStorage.getItem(LOG_KEY)) || [];
    console.table(log);
  }

  function restore(versionId) {
    const version = JSON.parse(localStorage.getItem(versionId));
    if (!version) {
      console.error('Version not found!');
      return;
    }

    document.open();
    document.write(version.html);
    document.close();

    alert(`Restored to version: ${versionId}`);
  }

  return {
    init,
    commit,
    log,
    restore,
  };
})();
