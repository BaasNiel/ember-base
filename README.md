# What is this?
This is a basic ember app used (in my case) as the frontend that is connected to a rails api. This repo goes hand-in-hand with [this repo for the api](https://github.com/BaasNiel/rails-api-base). I use these repos to get an app up-and-running in a few minutes. You can copy the repos or follow the steps below to get up-and-running quickly.

# Steps
1. `ember new app-name`
2. Add .env support by running `ember install ember-cli-dotenv`.
3. Add your `.env` file with `API_HOST=http://localhost:3000` in it.
4. Add `.env` to your `.gitignore`
5. Add the `apiHost` key to the `ENV` object in `config/environment.js`:
    ```
    var ENV = {
        modulePrefix: 'app-name',
        // other stuff
        apiHost: process.env.API_HOST
    };
    ```
5. Add `app/adaptors/application.js` file and add the following to it:
    ```
    import ENV from 'dota-picky/config/environment';
    import DS from 'ember-data';

    export default DS.RESTAdapter.extend({
      host: ENV.apiHost
    });
    ```

Your app is ready. You can now go set up a model, return it from a route, and it should call the corresponding model from your connected api.

# Useful Resources
1. https://spin.atomicobject.com/2017/03/06/rails-ember-cli/
2. https://wyeworks.com/blog/2015/6/30/how-to-build-a-rails-5-api-only-and-ember-application
3. https://guides.emberjs.com/v2.15.0/getting-started/quick-start/
