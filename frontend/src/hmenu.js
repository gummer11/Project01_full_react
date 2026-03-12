//js2 try

//s1
document.addEventListener("DOMContentLoaded", function () {
  let subItems = document.querySelectorAll('.sub-item');
  let mainSection = document.querySelector('.main section article');

  // Mapping between sub-item text and its corresponding content
  const contentMapping = {
      'What is a Thesaurus?': `
          <p>A thesaurus is a reference book or a digital resource that provides synonyms and sometimes antonyms for words. It helps users find words with similar or related meanings, which can enhance their vocabulary and improve their writing by providing alternative word choices.</p>
      `,
      'Key Features': `
          <ul>
              <li><strong>Synonyms:</strong> Words with similar meanings.</li>
              <li><strong>Antonyms:</strong> Words with opposite meanings.</li>
              <li><strong>Contextual Usage:</strong> Examples of how synonyms can be used in different contexts.</li>
              <li><strong>Categorization:</strong> Words categorized by part of speech.</li>
          </ul>
      `,
      'Types of Thesauri': `
          <ul>
              <li><strong>Traditional Thesaurus:</strong> A printed book organized alphabetically or conceptually.</li>
              <li><strong>Online Thesaurus:</strong> Digital versions that offer quick search capabilities and extensive information.</li>
          </ul>
      `,
      'Uses of a Thesaurus': `
          <ul>
              <li>Enhancing vocabulary</li>
              <li>Avoiding repetition</li>
              <li>Improving writing style</li>
          </ul>
      `,
      'Example': `
          <p>If you look up the word "big" in a thesaurus, you might find synonyms such as:</p>
          <ul class="text-center mb-4">
              <li>Large</li>
              <li>Huge</li>
              <li>Enormous</li>
              <li>Gigantic</li>
              <li>Immense</li>
          </ul>
          <p>This allows a writer to choose the most fitting word for their sentence, enhancing clarity and impact.</p>
      `,
      'Community Forum': `
          <section id="home">
              <h2>Welcome to the Community Forum</h2>
              <p>Engage in discussions, ask questions, and share your knowledge with the community.</p>
          </section>
          <section id="categories">
              <h2>Forum Categories</h2>
              <ul>
                  <li><a href="#general-discussion">General Discussion</a></li>
                  <li><a href="#writing-help">Writing Help</a></li>
                  <li><a href="#vocabulary-tips">Vocabulary Tips</a></li>
              </ul>
          </section>
          <section id="general-discussion">
              <h2>General Discussion</h2>
              <ul class="threads">
                  <li><a href="#thread-1">How to improve writing skills?</a> - <span class="text-cyan-300">Posted by User123</span></li>
                  <li><a href="#thread-2">Favorite thesaurus tools</a> - <span class="text-cyan-300">Posted by User456</span></li>
              </ul>
              <a href="#new-thread" class="button mt-6">Start New Thread</a>
          </section>
          <section id="thread-1">
              <h2>How to improve writing skills?</h2>
              <div class="post">
                  <p><strong>User123:</strong> What are some effective ways to improve writing skills?</p>
              </div>
              <div class="reply">
                  <p><strong>User789:</strong> Practice writing daily, read a lot, and use a thesaurus to find the best words.</p>
              </div>
              <form class="reply-form">
                  <textarea placeholder="Write your reply..."></textarea>
                  <button type="submit">Reply</button>
              </form>
          </section>
          <section id="new-thread">
              <h2>Start a New Thread</h2>
              <form class="new-thread-form">
                  <input type="text" placeholder="Thread Title">
                  <textarea placeholder="Write your post..."></textarea>
                  <button type="submit">Post</button>
              </form>
          </section>
      `,
      "Blogger's Corner": `
          <h2 class="text-xl font-semibold mb-4">Read our latest blog posts:</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <article class="card p-6 bg-black bg-opacity-20 rounded-lg shadow-lg transform transition hover:-translate-y-2 hover:shadow-xl">
                  <h3 class="text-lg font-bold mb-2">
                      <a href="#blog-post-1" class="text-indigo-200 hover:underline">Enhancing Your Writing with a Thesaurus</a>
                  </h3>
                  <p class="text-gray-200">Discover how using a thesaurus can improve your writing by providing alternative word choices and expanding your vocabulary.</p>
              </article>
              <article class="card p-6 bg-black bg-opacity-20 rounded-lg shadow-lg transform transition hover:-translate-y-2 hover:shadow-xl">
                  <h3 class="text-lg font-bold mb-2">
                      <a href="#blog-post-2" class="text-indigo-300 hover:underline">Top 10 Thesaurus Tools for Writers</a>
                  </h3>
                  <p class="text-gray-200">Explore our top picks for online thesaurus tools that can help writers find the perfect word for any context.</p>
              </article>
          </div>
      `,
  };

  subItems.forEach(function (subItem) {
      subItem.addEventListener('click', function (event) {
          event.preventDefault();

          let subItemText = this.textContent.trim();

          // Update the main section content with both text and related content
          mainSection.innerHTML = `
              <button class="main-button p-2 rounded-md">${subItemText}</button>
              <p class="text-center mt-6">${contentMapping[subItemText]}</p>
          `;
      });
  });

  let subBtns = document.querySelectorAll('.sub-btn');
  subBtns.forEach(function (subBtn) {
      subBtn.addEventListener('click', function () {
          let subMenu = this.nextElementSibling;
          subMenu.style.maxHeight = subMenu.style.maxHeight === '400px' ? '0' : '400px';
          subMenu.style.opacity = subMenu.style.opacity === '1' ? '0' : '1';
          let dropdownIcon = this.querySelector('.dropdown');
          dropdownIcon.classList.toggle('rotate');
      });
  });

  let menuBtn = document.querySelector('.menu-btn');
  let sideBar = document.querySelector('.side-bar');
  let closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener('click', function () {
      sideBar.classList.add('active');
      menuBtn.style.visibility = 'hidden';
  });

  closeBtn.addEventListener('click', function () {
      sideBar.classList.remove('active');
      menuBtn.style.visibility = 'visible';
  });
});
//s1 vége
//s2

//s2 vége

