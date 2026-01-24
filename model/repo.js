
(function (global) {
    class Git {
        constructor(name) {
            this.name = name;
            this.lastCommitid = -1;
            this.branches = {};
            var master = new Branch("master", null);
            this.branches["master"] = master
            this.HEAD = master;    
        }

        commit (message) {
          var commit = new Commit(++this.lastCommitid, this.HEAD.commit, message, this.HEAD.name);
          this.HEAD.commit = commit;
        }

        log() {
            let commit = this.HEAD.commit;
            var history = [];
            while(commit) {
                history.push(commit);
                commit = commit.parent;
            }
            return history;
        }

        historyToIdMapper(history) {
            var ids = history.map((commit) => {
                return commit.id;
            });
            return ids.join('-');
        }

        createBranch(name) {
            if(this.branches[name]) {
                throw new Error(`Branch: ${name} already exists`);
            }
            this.branches[name] = new Branch(name, this.HEAD.commit);
        }

        checkout(name) {
            if(this.branches[name]) {
                console.log('switched to existing branch:', this.branches[name]);
                this.HEAD = this.branches[name];
            } else {
                this.branches[name] = new Branch(name, this.HEAD.commit);
                this.HEAD = this.branches[name];
                console.log('switched to existing branch:', this.branches[name]);
            }
        }
    }

    class Commit {
        constructor(id, parent, message, branch) {
            this.id = id;
            this.message = message;
            this.parent = parent;
            this.branch = branch;
            this.timeStamp = new Date();
        }
    }

    class Branch {
        constructor(name, commit) {
            this.name = name;
            this.commit = commit;
        }
    }   
    window.Git = Git;
    global.Git = Git;
}) (typeof window !== 'undefined' ? window : global);
