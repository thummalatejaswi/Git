document.addEventListener("DOMContentLoaded", () => {
  const repo = new Git("my-repo");

  function update() {
    render(repo);
  }

  document.getElementById("commitBtn").addEventListener("click", () => {
    const msg = document.getElementById("commitMsg").value.trim();
    if (!msg) return alert("Enter commit message");

    repo.commit(msg);
    update();
    document.getElementById("commitMsg").value = "";
  });

  document.getElementById("createBranchBtn").addEventListener("click", () => {
    const name = document.getElementById("branchName").value.trim();
    if (!name) return alert("Enter branch name");

    repo.createBranch(name);
    render(repo);
    document.getElementById("branchName").value = "";
  });

  document.getElementById("checkoutBtn").addEventListener("click", () => {
    const name = document.getElementById("checkoutBranchName").value.trim();
    if (!name) return alert("Enter branch name");

    repo.checkout(name);
    render(repo);
  });



  render(repo);
  window.repo = repo;
});
