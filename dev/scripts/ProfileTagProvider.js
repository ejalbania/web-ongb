class ProfileTag {
  constructor(imgSrc, name, role) {
    this.imgSrc = imgSrc;
    this.name = name;
    this.role = role;
  }
}

class ProfileTagProvider {
  constructor(sectionIDName, profiles) {
    this.sectionIDName = sectionIDName;
    this.profiles = profiles;

    document.addEventListener("DOMContentLoaded", () => {
      this.fillSection();
    });
  }

  fillSection() {
    let section = document.querySelector(`#${this.sectionIDName}`);

    this.profiles.forEach((profile) => {
      section.appendChild(this.createTagElement(profile));
    });
  }

  createTagElement(profile) {
    let tag = document.createElement("div");
    tag.classList.add("profile-container");

    tag.innerHTML = `
    <div class="profile-tag-content">
          <div class="image-container profile-group">
            <img
              src="${profile.imgSrc}"
              alt=""
            />
          </div>
          <div class="profile-tag profile-group">
            <div class="tag-pointer"></div>
            <div class="text-container">
              <p>${profile.name}</p>
              ${profile.role ? `<p>${profile.role}</p>` : ""}
            </div>
          </div>
        </div>
    `;

    return tag;
  }
}

var profileProvider = new ProfileTagProvider(
  "profile-tags-container",
  [
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a34898e51985ad7c4311.png",
      name: "Cara Parrish",
      role: "Founder/Ceo at Cara Parrish Marketing",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a34981c3b05caa0b85eb.jpeg",
      name: "Yvette Ankunda",
      role: "HR Generalist - Iterable",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a3489146b50f245abeb0.jpeg",
      name: "Pamela King",
      role: "Field Marketing – Google",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a34863925e2060881973.jpeg",
      name: "Sonya Magett",
      role: "Content Manager - Samsung",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a34960b78437d4f00ae8.jpeg",
      name: "Louvere Walker-Hannon",
      role: "Application Engineer – Math Works",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a3484fb6bc6e50dd6880.jpeg",
      name: "Jameelah Calhoun",
      role: "Director New Product Strategy - OnTech Capital ",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a34963925e834a881975.jpeg",
      name: "Nannearl Brown",
      role: "Product Researcher – Figma",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a348773e167e2bf84b45.jpeg",
      name: "Brittany Hayles",
      role: "Founder/Ceo – Hayes Consulting",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a34863925e9858881972.jpeg",
      name: "Stephanie Davis",
      role: "IT Director - Support Center &amp; Incident Management Operations – TIAA Bank",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a3484fb6bc019fdd687f.jpeg",
      name: "Justine Clarke",
      role: "Software Engineer – Liberty Mutual",
    },
    {
      img: "https://girlsequitymovement.org/wp-content/uploads/2020/10/AlawnaJamison.jpg",
      name: "Alawna Jamison",
      role: "Cofounder Consultant-In Common",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a348437290cb74c1c762.jpeg",
      name: "Tess Mercer",
      role: "Head of global marketing technology and analytics – Synopsys",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a34881c3b0c5480b85ea.jpeg",
      name: "Equisha Glenn",
      role: "Civil Engineering – NASA",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a348437290cb10c1c763.jpeg",
      name: "Donna Auguste",
      role: "Founder/Ceo – Auguste Research Group",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a34963925e9036881974.jpeg",
      name: "Shayanna Sims",
      role: "UX Program Manager- Google",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a34860b7840076f00ae7.png",
      name: "Regina Shields Mentor",
      role: "Film Gurl Productions, CEO",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a348baaef978fea34fbf.jpeg",
      name: "Chasma Smith",
      role: "Founder - Try X Conquer",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a348a66795cdbb1d1ed2.jpeg",
      name: "Cephra Stuart",
      role: "People Analytics",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a34860b784b9a2f00ae6.jpeg",
      name: "Chantale Pierre-Lonis",
      role: "Entrepreneur",
    },
    {
      img: "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/6806a3489146b54fd65abeb1.jpeg",
      name: "Andrea Long Mentor",
      role: "Global Marketing Manager Recruiting Events and Partnerships – Twilio",
    },
  ].map((profile) => new ProfileTag(profile.img, profile.name, profile.role))
);
