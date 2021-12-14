import VanessaPic from "../assets/van_con.jpg";
import WalescaPic from "../assets/wal_amb.png";
import EvaPic from "../assets/eva_rod.png";
import TaylorPic from "../assets/tay_will.png";

const Bios = () => {
  return (
    <div>
      <h3>
        <a href="https://github.com/wal3sca">Walesca Ambroise</a>
      </h3>
      <img
        className="all-images"
        src={WalescaPic}
        alt="wal"
        width="200"
        height="200"
      />
      <p1>
        Walesca Ambroise is a full stack software engineer who has taken the
        role of project manager for the YouTube React Project. Ambroise has
        taken the responsibility of managing each team members progress, making
        sure the team is aware of their roles and responsibilities as well as
        pushing and merging the teams repositories via GitHub.
      </p1>
      <h3>
        <a href="https://github.com/TaylorWill94">Taylor Williams</a>
      </h3>
      <img
        className="all-images"
        src={TaylorPic}
        alt="tay"
        width="200"
        height="200"
      />
      <p1>
        Taylor Williams is a software engineer. Her role in this project was to
        create the Navigation component. This allows the user to navigate
        between the home and about page.
      </p1>
      <h3>
        <a href="https://github.com/EvaRodCor">Eva Rodriguez</a>
      </h3>
      <img
        className="all-images"
        src={EvaPic}
        alt="eva"
        width="200"
        height="200"
      />
      <p1>
        Eva Rodriguez is a software engineer whose role for this project was to
        manage retrieving data from API and creating the search bar components.
      </p1>
      <h3>
        <a href="https://github.com/vanessaconti">Vanessa Conti</a>
      </h3>
      <img
        className="all-images"
        src={VanessaPic}
        alt="van"
        width="200"
        height="200"
      />
      <p1>
        Vanessa Conti full stack software engineer who took on the role of the
        search bar in collaboration with Eva Rodriguez. The search bar allows
        the user to search for and select artist videos from a results page then
        allows them to view that video.
      </p1>
    </div>
  );
};

export default Bios;
