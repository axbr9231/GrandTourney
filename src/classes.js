export class Team {
  constructor(name, isTop) {
    this.name = name;
    this.isTop = isTop;
    this.className = isTop ? 'top-team' : 'bottom-team';
    this.won = false;
    this.lost = false;
    this.active = false;
  }

  activateTeam() {
    this.active = true;
  }

  setWinner() {
    this.won = true;
  }

  setLoser() {
    this.lost = true;
  }
}

export class Match {
  constructor(round, teams) {
    this.round = round;
    this.topTeam = teams && teams[0] ? new Team(teams[0], true) : undefined;
    this.bottomTeam = teams && teams[1] ? new Team(teams[1], false) : undefined;
    this.height = (Math.pow(2, round) * 100) - (Math.floor(Math.pow(2, round - 2)) * 100);
    this.isActive = false;
    this.isVisible = true;
  }

  activateMatch() {
    this.topTeam.activateTeam()
    this.bottomTeam.activateTeam();
    this.isActive = true;
  }

  setWinner(winningTeam, losingTeam) {
    winningTeam.setWinner();
    losingTeam.setLoser();
  }
}
