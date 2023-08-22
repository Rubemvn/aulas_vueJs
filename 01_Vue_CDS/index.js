const app = Vue.createApp({
  data() {
    return {
      name: 'Rúbem Vieira',
      login: 'rubem_vn',
      bio: 'CEO da Los Bodes LTDA & Los Bodes SA',
      company: 'Los Bodes LTDA',
      avatar_url: 'https://unsplash.it/256',
      searchInput: '',
    };
  },
  methods: {
    async fetchGithubUser() {
      const res = await fetch(
        `https://api.github.com/users/${this.searchInput}`
      );

      const { login, name, bio, company, avatar_url } = await res.json();

      this.name = name;
      this.login = login;
      this.bio = bio;
      this.company = company;
      this.avatar_url = avatar_url;
    },
  },
});

app.mount('#app');
