import React from "react";
import './CasesCard.css'

function CasesCard() {
  return (
    <div class="card casescard border border-secondary">
      <div class="card-body">
        <div class="dropdown mb-1">
          <button
            class="btn btn-secondary dropdown-toggle bg-dark"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Search by State
          </button>
          <h6 class="card-subtitle mb-2 mt-2 text-muted">India</h6>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
        <div class="card-title title mb-2">
          <div class="today-numbers">1234567</div>
          <div>Total Vaccinations Today</div>
        </div>

        <div class="card-text d-flex flex-row">
          <div class="yesterday-doses me-1">
            <div class="yesterday-numbers">12345</div>
            <div>Vaccination Doses Yesterday</div>
          </div>
          <div class="total-doses ms-1">
            <div class="total-numbers">12345</div>
            <div>Total Vaccination Doses</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasesCard;
