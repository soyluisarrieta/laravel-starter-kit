# Changelog


## v2.1.0

[compare changes](https://github.com/soyluisarrieta/laravel-starter-kit/compare/v2.0.0...v2.1.0)

### 🚀 Enhancements

- **deploy:** Release and deploy every push to main on Hostinger ([7b6c80d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/7b6c80d))

### 📖 Documentation

- Add new tasks to pending list ([761dd54](https://github.com/soyluisarrieta/laravel-starter-kit/commit/761dd54))
- Add new tasks to pending list again ([d2281f1](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d2281f1))
- **release:** Explain that every push to main is a release ([d789267](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d789267))

### 🤖 CI

- **deploy:** Merge each push into its release so the graph groups it ([37be00c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/37be00c))

### ❤️ Contributors

- Luis Arrieta <luisarrieta796@gmail.com>
- Luis Arrieta Avilez ([@soyluisarrieta](https://github.com/soyluisarrieta))

## v2.0.0

[compare changes](https://github.com/soyluisarrieta/laravel-starter-kit/compare/v1.1.0...v2.0.0)

### 🚀 Enhancements

- **users:** Migrate users.id from bigint to uuid ([3d32fa6](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3d32fa6))
- **users:** Add password_set_at column to track password ownership ([bd69b21](https://github.com/soyluisarrieta/laravel-starter-kit/commit/bd69b21))
- **auth:** Force password setup after sso registration and block duplicate emails ([cd1b30e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/cd1b30e))
- **settings:** Add connected accounts page to link and unlink google sso ([5fbb404](https://github.com/soyluisarrieta/laravel-starter-kit/commit/5fbb404))
- **theme:** Apply paylus color palette and document tokens ([3c5b2e1](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3c5b2e1))
- **errors:** Capture user agent and environment, redact sensitive url params ([53dae8d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/53dae8d))

### 🩹 Fixes

- **release:** Use bunx to invoke changelogen ([d400f4a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d400f4a))
- **auth:** Surface flashed error on login page after sso rejection ([c3206f6](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c3206f6))
- **errors:** Clear stale target after delete and guard confirm dialog against double submit ([b182d13](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b182d13))
- **ci:** Add axios dependency and build step to ci:check ([c627254](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c627254))

### 💅 Refactors

- **icons:** Migrate from lucide to heroicons 2 outline via barrel ([c0fb026](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c0fb026))

### 📖 Documentation

- **init:** Simplify for GitHub template workflow ([9963c2f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/9963c2f))
- Enhance readme with kit features and project template ([3185938](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3185938))
- Create pending list ([d9e3167](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d9e3167))
- Update pending list ([29d5330](https://github.com/soyluisarrieta/laravel-starter-kit/commit/29d5330))
- Update pending list ([ad75b33](https://github.com/soyluisarrieta/laravel-starter-kit/commit/ad75b33))
- Post-laravel-13 cleanup (readme, pendientes, env, spatie config) ([c4d5689](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c4d5689))
- **claude:** Add bilingual rule (code en, ui es) ([1ff05bb](https://github.com/soyluisarrieta/laravel-starter-kit/commit/1ff05bb))
- **readme:** Add pre-development checklist for new projects from template ([a7f45a7](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a7f45a7))
- Clear pendientes list ([58a35bc](https://github.com/soyluisarrieta/laravel-starter-kit/commit/58a35bc))

### 🏡 Chore

- **skills:** Move skills to .claude and add git-workflow ([9d7e523](https://github.com/soyluisarrieta/laravel-starter-kit/commit/9d7e523))
- **inertia:** Migrate config and blade to inertia v3 conventions ([e1fbebb](https://github.com/soyluisarrieta/laravel-starter-kit/commit/e1fbebb))
- **frontend:** Bump @inertiajs/react and vite to v3/v8 for inertia v3 compat ([985a25d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/985a25d))
- **users:** Align validation rules and types with uuid user id ([a25c13c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a25c13c))
- **release:** V1.2.0 ([cedfdaa](https://github.com/soyluisarrieta/laravel-starter-kit/commit/cedfdaa))

### ✅ Tests

- **backend:** Migrate from PHPUnit to Pest ([3d7db20](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3d7db20))
- **frontend:** Add Vitest and React Testing Library ([3247430](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3247430))
- Add data-table slice and utility tests ([f7ede70](https://github.com/soyluisarrieta/laravel-starter-kit/commit/f7ede70))

### 🎨 Styles

- **frontend:** Apply prettier formatting ([691e93f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/691e93f))
- **js:** Split inertia type imports and remove unused eslint directive ([bf162d5](https://github.com/soyluisarrieta/laravel-starter-kit/commit/bf162d5))
- **php:** Apply pint fully_qualified_strict_types and ordered_imports ([fdfcf43](https://github.com/soyluisarrieta/laravel-starter-kit/commit/fdfcf43))

### 🤖 CI

- Run pest and js tests in workflow ([dfa3d5b](https://github.com/soyluisarrieta/laravel-starter-kit/commit/dfa3d5b))

### ❤️ Contributors

- Luis Arrieta <luisarrieta796@gmail.com>
- Luis Arrieta Avilez ([@soyluisarrieta](https://github.com/soyluisarrieta))

## v1.2.0

[compare changes](https://github.com/soyluisarrieta/laravel-starter-kit/compare/v1.1.0...v1.2.0)

### 🚀 Enhancements

- **users:** Migrate users.id from bigint to uuid ([3d32fa6](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3d32fa6))
- **users:** Add password_set_at column to track password ownership ([bd69b21](https://github.com/soyluisarrieta/laravel-starter-kit/commit/bd69b21))
- **auth:** Force password setup after sso registration and block duplicate emails ([cd1b30e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/cd1b30e))
- **settings:** Add connected accounts page to link and unlink google sso ([5fbb404](https://github.com/soyluisarrieta/laravel-starter-kit/commit/5fbb404))
- **theme:** Apply paylus color palette and document tokens ([3c5b2e1](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3c5b2e1))
- **errors:** Capture user agent and environment, redact sensitive url params ([53dae8d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/53dae8d))

### 🩹 Fixes

- **release:** Use bunx to invoke changelogen ([d400f4a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d400f4a))
- **auth:** Surface flashed error on login page after sso rejection ([c3206f6](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c3206f6))
- **errors:** Clear stale target after delete and guard confirm dialog against double submit ([b182d13](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b182d13))
- **ci:** Add axios dependency and build step to ci:check ([c627254](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c627254))

### 💅 Refactors

- **icons:** Migrate from lucide to heroicons 2 outline via barrel ([c0fb026](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c0fb026))

### 📖 Documentation

- **init:** Simplify for GitHub template workflow ([9963c2f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/9963c2f))
- Enhance readme with kit features and project template ([3185938](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3185938))
- Create pending list ([d9e3167](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d9e3167))
- Update pending list ([29d5330](https://github.com/soyluisarrieta/laravel-starter-kit/commit/29d5330))
- Update pending list ([ad75b33](https://github.com/soyluisarrieta/laravel-starter-kit/commit/ad75b33))
- Post-laravel-13 cleanup (readme, pendientes, env, spatie config) ([c4d5689](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c4d5689))
- **claude:** Add bilingual rule (code en, ui es) ([1ff05bb](https://github.com/soyluisarrieta/laravel-starter-kit/commit/1ff05bb))
- **readme:** Add pre-development checklist for new projects from template ([a7f45a7](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a7f45a7))
- Clear pendientes list ([58a35bc](https://github.com/soyluisarrieta/laravel-starter-kit/commit/58a35bc))

### 🏡 Chore

- **skills:** Move skills to .claude and add git-workflow ([9d7e523](https://github.com/soyluisarrieta/laravel-starter-kit/commit/9d7e523))
- **inertia:** Migrate config and blade to inertia v3 conventions ([e1fbebb](https://github.com/soyluisarrieta/laravel-starter-kit/commit/e1fbebb))
- **frontend:** Bump @inertiajs/react and vite to v3/v8 for inertia v3 compat ([985a25d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/985a25d))
- **users:** Align validation rules and types with uuid user id ([a25c13c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a25c13c))

### ✅ Tests

- **backend:** Migrate from PHPUnit to Pest ([3d7db20](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3d7db20))
- **frontend:** Add Vitest and React Testing Library ([3247430](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3247430))
- Add data-table slice and utility tests ([f7ede70](https://github.com/soyluisarrieta/laravel-starter-kit/commit/f7ede70))

### 🎨 Styles

- **frontend:** Apply prettier formatting ([691e93f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/691e93f))
- **js:** Split inertia type imports and remove unused eslint directive ([bf162d5](https://github.com/soyluisarrieta/laravel-starter-kit/commit/bf162d5))
- **php:** Apply pint fully_qualified_strict_types and ordered_imports ([fdfcf43](https://github.com/soyluisarrieta/laravel-starter-kit/commit/fdfcf43))

### 🤖 CI

- Run pest and js tests in workflow ([dfa3d5b](https://github.com/soyluisarrieta/laravel-starter-kit/commit/dfa3d5b))

### ❤️ Contributors

- Luis Arrieta <luisarrieta796@gmail.com>
- Luis Arrieta Avilez ([@soyluisarrieta](https://github.com/soyluisarrieta))

## v1.1.0


### 🚀 Enhancements

- Create quotes file with 100 entries and implement random selection ([45e0c7a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/45e0c7a))
- Add datepicker component ([7d0ad93](https://github.com/soyluisarrieta/laravel-starter-kit/commit/7d0ad93))
- Add birthdate field to profile settings ([7edb34e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/7edb34e))
- Enhance datepicker component ([c440b0a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c440b0a))
- Add phone input component in profile settings ([31bec6d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/31bec6d))
- Add avatar with preview in profile settings ([f8a58ec](https://github.com/soyluisarrieta/laravel-starter-kit/commit/f8a58ec))
- Add a remove avatar button in profile settings ([e80909c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/e80909c))
- Download avatar image from google auth ([1d237e5](https://github.com/soyluisarrieta/laravel-starter-kit/commit/1d237e5))
- Update and save profile avatar image ([7a0878a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/7a0878a))
- Upload and show avatar image updated ([a4d5c7c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a4d5c7c))
- Create multi step form component ([a5bb335](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a5bb335))
- Implement form data handling in multi step form component ([67ae82e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/67ae82e))
- Transform multi step form output in array instead array ([49da0dc](https://github.com/soyluisarrieta/laravel-starter-kit/commit/49da0dc))
- **i18n:** Add Spanish localization for UI and routes ([11d3f62](https://github.com/soyluisarrieta/laravel-starter-kit/commit/11d3f62))
- **deps:** Add resend/resend-laravel package for email integration ([949e68d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/949e68d))
- **auth:** Install and configure spatie/laravel-permission package ([5467e63](https://github.com/soyluisarrieta/laravel-starter-kit/commit/5467e63))
- **auth:** Implement role-based access control system ([3a6b1b1](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3a6b1b1))
- **auth:** Add roles and permissions to auth data ([22f3327](https://github.com/soyluisarrieta/laravel-starter-kit/commit/22f3327))
- **routing:** Add spanish resource route macro to AppServiceProvider ([7794afe](https://github.com/soyluisarrieta/laravel-starter-kit/commit/7794afe))
- **users:** Implement user management with CRUD operations ([b1f5983](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b1f5983))
- **user:** Split name into first and last name and add user details ([d1725f7](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d1725f7))
- **auth:** Add lastname field to registration form ([d2da2f4](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d2da2f4))
- **profile:** Enhance profile form with additional fields and UI components ([17e60f6](https://github.com/soyluisarrieta/laravel-starter-kit/commit/17e60f6))
- **profile:** Add avatar upload and management functionality ([3d1cd73](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3d1cd73))
- **ui:** Improve form input fields with icons and layout ([481da23](https://github.com/soyluisarrieta/laravel-starter-kit/commit/481da23))
- **data-table:** Implement data table component with filtering, sorting and pagination ([629403e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/629403e))
- **users:** Replace table with data-table component and add lastname field ([472cb2d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/472cb2d))
- **users:** Add filterable columns to users data table ([c9da955](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c9da955))
- **users:** Add avatar display in user listing ([695d9d9](https://github.com/soyluisarrieta/laravel-starter-kit/commit/695d9d9))
- **users:** Add lastname column and user tabs functionality ([d9b8bd9](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d9b8bd9))
- **auth:** Add google login button to auth pages ([1cf6959](https://github.com/soyluisarrieta/laravel-starter-kit/commit/1cf6959))
- **auth:** Add google socialite authentication support ([2def344](https://github.com/soyluisarrieta/laravel-starter-kit/commit/2def344))
- **api:** Add ApiResponse helper for standardized JSON response ([fa0fa25](https://github.com/soyluisarrieta/laravel-starter-kit/commit/fa0fa25))
- **llm:** Integrate language model with chat functionality ([3b2d1e5](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3b2d1e5))
- **auth:** Switch routes to spanish and disable Fortify default views ([649a91c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/649a91c))
- Publish language files, add spanish translations and update app locale ([51cb00e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/51cb00e))
- Translate entire UI and format code ([5883963](https://github.com/soyluisarrieta/laravel-starter-kit/commit/5883963))
- Extend user entity with additional attributes ([192b581](https://github.com/soyluisarrieta/laravel-starter-kit/commit/192b581))
- Add attributes spanish names in requests and ajust user request ([4013d87](https://github.com/soyluisarrieta/laravel-starter-kit/commit/4013d87))
- **auth:** Implement the full functionality of Google SSO ([2bee1ea](https://github.com/soyluisarrieta/laravel-starter-kit/commit/2bee1ea))
- Add permissions and roles enums and define seeders ([ed56e4c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/ed56e4c))
- Expose user roles and permissions and guard againt null avatar ([667b650](https://github.com/soyluisarrieta/laravel-starter-kit/commit/667b650))
- **auth:** Add permissions hook, constants, and user pages ([127d8da](https://github.com/soyluisarrieta/laravel-starter-kit/commit/127d8da))
- Conditionally render sidebar items based on permissions ([00b59f0](https://github.com/soyluisarrieta/laravel-starter-kit/commit/00b59f0))
- Protect user routes with permission middleware ([31ede94](https://github.com/soyluisarrieta/laravel-starter-kit/commit/31ede94))
- **users:** Add index method to return users with roles ([a299441](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a299441))
- **ui:** Add modular a reusable data table component ([6179d63](https://github.com/soyluisarrieta/laravel-starter-kit/commit/6179d63))
- **users:** Add users listing view ([ad5e80c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/ad5e80c))
- **profile:** Implement upload, update, preview and remove avatar ([9987531](https://github.com/soyluisarrieta/laravel-starter-kit/commit/9987531))
- Add label type augmentation to tanstack table ([0eaf426](https://github.com/soyluisarrieta/laravel-starter-kit/commit/0eaf426))
- Add a constant for avatar paths ([fd5af02](https://github.com/soyluisarrieta/laravel-starter-kit/commit/fd5af02))
- Add toast notification for Inertia flash messages ([3c3c8ad](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3c3c8ad))
- Migrate from npm to bun for dependency management in workflows ([3353598](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3353598))
- Regenerate composer.lock ([2ce7f14](https://github.com/soyluisarrieta/laravel-starter-kit/commit/2ce7f14))
- **user:** Add last name to account ([98bc145](https://github.com/soyluisarrieta/laravel-starter-kit/commit/98bc145))
- **user:** Improve name and last name column headers ([9a3e59e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/9a3e59e))
- **user:** Display user details in sheet component ([b10607d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b10607d))
- **users:** Implement creation functionality ([06be3bc](https://github.com/soyluisarrieta/laravel-starter-kit/commit/06be3bc))
- Add dialog state managment globally ([989e0ca](https://github.com/soyluisarrieta/laravel-starter-kit/commit/989e0ca))
- Add a reusable dialog for user creation and editing ([eb10496](https://github.com/soyluisarrieta/laravel-starter-kit/commit/eb10496))
- Prevent autofocus in the editing dialog ([b5deb7b](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b5deb7b))
- **users:** Implement edition functionality ([1e95c8c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/1e95c8c))
- **user:** Add required attr, loading and proccessing button states ([e9f2e3e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/e9f2e3e))
- Add confirm dialog component ([d892d0f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d892d0f))
- **users:** Implement delete functionality ([6ce9747](https://github.com/soyluisarrieta/laravel-starter-kit/commit/6ce9747))
- Support additional data in confirm dialog component ([83f23e0](https://github.com/soyluisarrieta/laravel-starter-kit/commit/83f23e0))
- **users:** Implement delete multiple functionality ([6ebf347](https://github.com/soyluisarrieta/laravel-starter-kit/commit/6ebf347))
- Add export button to bulk actions and adjust styles ([1201547](https://github.com/soyluisarrieta/laravel-starter-kit/commit/1201547))
- **roles:** Add hex color attribute and add labels to roles and permissions ([c3944e9](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c3944e9))
- **ui:** Add enable pagination support to data-table ([5d26dc8](https://github.com/soyluisarrieta/laravel-starter-kit/commit/5d26dc8))
- **roles:** Implement roles and permissions listing in settings ([aa2dc1f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/aa2dc1f))
- **users:** Return roles and improve controller, update filter config ([19db625](https://github.com/soyluisarrieta/laravel-starter-kit/commit/19db625))
- **permissions:** Add and improve permission labels with grouped sets ([11d3567](https://github.com/soyluisarrieta/laravel-starter-kit/commit/11d3567))
- **roles:** Group and listing roles and permissions ([d8defe6](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d8defe6))
- **roles:** Implement updation functionality with loader ([f6dcf92](https://github.com/soyluisarrieta/laravel-starter-kit/commit/f6dcf92))
- **roles:** Implement creation functionality ([28dd2b8](https://github.com/soyluisarrieta/laravel-starter-kit/commit/28dd2b8))
- **roles:** Implement updating functionality for label role ([fc91b5e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/fc91b5e))
- **roles:** Add palette colors and color picker ([4863926](https://github.com/soyluisarrieta/laravel-starter-kit/commit/4863926))
- **role:** Prevent super admin updates ([bad32dd](https://github.com/soyluisarrieta/laravel-starter-kit/commit/bad32dd))
- **roles:** Implement delete functionality ([8a0d380](https://github.com/soyluisarrieta/laravel-starter-kit/commit/8a0d380))
- **roles:** Prevent last role delete ([f8a4f43](https://github.com/soyluisarrieta/laravel-starter-kit/commit/f8a4f43))
- **permissions:** Implement PBAC in frontend using useCan hook ([6d7af03](https://github.com/soyluisarrieta/laravel-starter-kit/commit/6d7af03))
- **permissions:** Protect role routes with MANAGE_ROLES permission middleware ([47a771a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/47a771a))
- Update Laravel 12 starter kit files and remove data-table component ([68a4e9a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/68a4e9a))
- **data-table:** Add generic table component and user listing ([c25294c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c25294c))
- **data-table:** Add header class name and column alignment ([99c099a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/99c099a))
- **users:** Implement date table global search in server side ([064c91b](https://github.com/soyluisarrieta/laravel-starter-kit/commit/064c91b))
- **data-table:** Add pagination, per page, sort by and sort order direction ([8ad88ed](https://github.com/soyluisarrieta/laravel-starter-kit/commit/8ad88ed))
- **data-table:** Add clean query params utility ([17948ef](https://github.com/soyluisarrieta/laravel-starter-kit/commit/17948ef))
- **users:** Add role column ([d2b79d0](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d2b79d0))
- **data-table:** Implement a reusable data table filtering in backend ([795070e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/795070e))
- **data-table:** Implement zustand store and custom hook ([e212942](https://github.com/soyluisarrieta/laravel-starter-kit/commit/e212942))
- Add debounce hook ([32460a0](https://github.com/soyluisarrieta/laravel-starter-kit/commit/32460a0))
- **data-table:** Add column selection with persistence ([28cecb0](https://github.com/soyluisarrieta/laravel-starter-kit/commit/28cecb0))
- **data-table:** Define query param types, add preserve state and scroll to pagination ([e3c56c8](https://github.com/soyluisarrieta/laravel-starter-kit/commit/e3c56c8))
- **data-table:** Implement caching in pagination and ajust user table ([2a1f44e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/2a1f44e))
- **data-table:** Implement bulk actions and add row id type to selected prop ([cf7f24f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/cf7f24f))
- **users:** Add bulk actions ([9fdb8da](https://github.com/soyluisarrieta/laravel-starter-kit/commit/9fdb8da))
- **data-table:** Implement context api to access the table instance from everywhere ([de1b937](https://github.com/soyluisarrieta/laravel-starter-kit/commit/de1b937))
- **data-table:** Allow custom columns with id instead of data key ([f76b97c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/f76b97c))
- **users:** Add row actions column ([06970a3](https://github.com/soyluisarrieta/laravel-starter-kit/commit/06970a3))
- **data-table:** Add row action component ([a512312](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a512312))
- **users:** Add row actions with permission- based ([5401a7c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/5401a7c))
- **data-table:** Implement column visibility ([d6c5b8f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d6c5b8f))
- **data-table:** Prevent hiding last visible column ([83d460f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/83d460f))
- **data-table:** Add hideable prop to column definition ([6696f27](https://github.com/soyluisarrieta/laravel-starter-kit/commit/6696f27))
- **data-table:** Add fit column prop and right-align row actions ([c3f2bde](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c3f2bde))
- **data-table:** Add sticky columns support ([a209bed](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a209bed))
- **data-table:** Redesign pagination component ([2df4c4e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/2df4c4e))
- **ui:** Add React Error Boundary component ([462c1f5](https://github.com/soyluisarrieta/laravel-starter-kit/commit/462c1f5))
- **errors:** Create client_errors table and model ([20a96f7](https://github.com/soyluisarrieta/laravel-starter-kit/commit/20a96f7))
- **errors:** Add client error reporting endpoint ([3ef5af4](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3ef5af4))
- **errors:** Add notifications for new and frequent errors ([0802b8e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/0802b8e))
- **data-table:** Add empty state ([fac5021](https://github.com/soyluisarrieta/laravel-starter-kit/commit/fac5021))
- **data-table:** Support dynamic row action labels and visibility ([e3dd628](https://github.com/soyluisarrieta/laravel-starter-kit/commit/e3dd628))
- **errors:** Add error boundary reporting and improve grouping ([699a3fb](https://github.com/soyluisarrieta/laravel-starter-kit/commit/699a3fb))
- **errors:** Add admin errors dashboard ([c4fbc55](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c4fbc55))

### 🔥 Performance

- Add prefetch caching to navigation links ([33c9946](https://github.com/soyluisarrieta/laravel-starter-kit/commit/33c9946))

### 🩹 Fixes

- Correct post route for login and register ([017b331](https://github.com/soyluisarrieta/laravel-starter-kit/commit/017b331))
- Rename route for login, register and dashboard tests ([ee3283d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/ee3283d))
- **auth:** Prevent duplicate email error on SSO login ([3cdb48c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3cdb48c))
- Update form request validation for has_whatsapp field ([68601bd](https://github.com/soyluisarrieta/laravel-starter-kit/commit/68601bd))
- Correct max size rule avatar image in profile request ([c460ae9](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c460ae9))
- Get original avatar image for deleting old avatar image ([fe27963](https://github.com/soyluisarrieta/laravel-starter-kit/commit/fe27963))
- Persist form data in multi step form ([665841f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/665841f))
- **ProfileController:** Correct avatar file extension handling ([4385d02](https://github.com/soyluisarrieta/laravel-starter-kit/commit/4385d02))
- **data-table:** Prevent overflow in column filter toolbar ([ff423a2](https://github.com/soyluisarrieta/laravel-starter-kit/commit/ff423a2))
- **UserRequest:** Ensure only authenticated users can access endpoints ([64627ac](https://github.com/soyluisarrieta/laravel-starter-kit/commit/64627ac))
- Update home redirection ([e9dcb3c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/e9dcb3c))
- **users:** Add last name in action fortify and tests ([66ee7e5](https://github.com/soyluisarrieta/laravel-starter-kit/commit/66ee7e5))
- Clear table row selection after updated data ([26aa775](https://github.com/soyluisarrieta/laravel-starter-kit/commit/26aa775))
- Allow full-day date filtering in data table ([a126e53](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a126e53))
- Exclude roles and permissions from user auth data ([b793bbc](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b793bbc))
- Improve multi-value filter comparision and fix padding left ([d234aac](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d234aac))
- **users:** Add roles for each user and improve roles column style ([bc57508](https://github.com/soyluisarrieta/laravel-starter-kit/commit/bc57508))
- **ui:** Reset password in confirm dialog when is open change ([a309376](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a309376))
- **data-table:** Prevent 'layout shift' when the bulk actions dropdown menu is open ([06c908f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/06c908f))
- Apply bulk action to selected rows on the others pages and reorder data-table types ([ac69027](https://github.com/soyluisarrieta/laravel-starter-kit/commit/ac69027))
- **data-table:** Clear cache when there is a modification in the rows ([7b702de](https://github.com/soyluisarrieta/laravel-starter-kit/commit/7b702de))
- **data-table:** Preserve input search during debounced request ([fd68f30](https://github.com/soyluisarrieta/laravel-starter-kit/commit/fd68f30))
- **data-table:** Preserve page and filters after mutations ([f94527a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/f94527a))
- Remove hardcoded default password in user creation ([fbabdf1](https://github.com/soyluisarrieta/laravel-starter-kit/commit/fbabdf1))
- **security:** Add timeout and validation to avatar download ([f218ce1](https://github.com/soyluisarrieta/laravel-starter-kit/commit/f218ce1))

### 💅 Refactors

- Rename database and app ([29055c2](https://github.com/soyluisarrieta/laravel-starter-kit/commit/29055c2))
- Rename IA button ([43f59fd](https://github.com/soyluisarrieta/laravel-starter-kit/commit/43f59fd))
- Increase phone field length to 50 characters ([de3e54f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/de3e54f))
- Correct total steps and final message ([48f27d9](https://github.com/soyluisarrieta/laravel-starter-kit/commit/48f27d9))
- Clean up and standardize codebase in Laravel v12.18.0 ([314f57e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/314f57e))
- **auth:** Use translation key instead of hardcoded message ([93caa8f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/93caa8f))
- **controllers:** Move UserController to Modules namespace ([6b4b496](https://github.com/soyluisarrieta/laravel-starter-kit/commit/6b4b496))
- **user:** Simplify user model and improve validation ([60dafe1](https://github.com/soyluisarrieta/laravel-starter-kit/commit/60dafe1))
- **users:** Extract form logic into separate component ([e999c33](https://github.com/soyluisarrieta/laravel-starter-kit/commit/e999c33))
- **data-table:** Simplify filter UI and remove redundant code ([5afa50f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/5afa50f))
- **auth:** Remove two-factor authentication support ([e5e3891](https://github.com/soyluisarrieta/laravel-starter-kit/commit/e5e3891))
- Simplify user entity attributes ([7c77dc2](https://github.com/soyluisarrieta/laravel-starter-kit/commit/7c77dc2))
- Replace static with self in enums ([c46d49a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c46d49a))
- **types:** Add email verified at type in user interface and simplify UserAuth type ([bee5067](https://github.com/soyluisarrieta/laravel-starter-kit/commit/bee5067))
- **users:** Remove memoizations ([dc6ad79](https://github.com/soyluisarrieta/laravel-starter-kit/commit/dc6ad79))
- Reorganize component structure ([618aeff](https://github.com/soyluisarrieta/laravel-starter-kit/commit/618aeff))
- **user:** Remove create/edit pages, web routes and folder ([d0ebed2](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d0ebed2))
- **profile:** Rename concern, add user validations and ajust styles in profile page ([a928853](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a928853))
- Rename profile delete request and add password alias ([be0881b](https://github.com/soyluisarrieta/laravel-starter-kit/commit/be0881b))
- Modularize users page structure ([17ab01d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/17ab01d))
- Rename hook return to open and onOpenChange ([4d5b9dc](https://github.com/soyluisarrieta/laravel-starter-kit/commit/4d5b9dc))
- Group user requests into dedicated folder ([24c8833](https://github.com/soyluisarrieta/laravel-starter-kit/commit/24c8833))
- Rename permissions to plural ([4a27e71](https://github.com/soyluisarrieta/laravel-starter-kit/commit/4a27e71))
- Centralize users data-table config and use roles from backend meta ([42b4d0f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/42b4d0f))
- Rename roles and permissions to roles ([f5c5bdc](https://github.com/soyluisarrieta/laravel-starter-kit/commit/f5c5bdc))
- **permissions:** Update enum values and constants and remove grouper method ([5189dd8](https://github.com/soyluisarrieta/laravel-starter-kit/commit/5189dd8))
- Rename account folder to settings ([319b796](https://github.com/soyluisarrieta/laravel-starter-kit/commit/319b796))
- Simplify the definition of permissions on the client ([b0b1721](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b0b1721))
- **roles:** Return roles and permissions in the index method ([0d3893f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/0d3893f))
- **users:** Return users with role ids in index the index method ([b2ebda5](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b2ebda5))
- **auth:** Unify role CRUD permissions into role management ([3b3c8fe](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3b3c8fe))
- **data-table:** Expand and rename types ([f45fde4](https://github.com/soyluisarrieta/laravel-starter-kit/commit/f45fde4))
- **data-table:** Simplify component params ([766fb50](https://github.com/soyluisarrieta/laravel-starter-kit/commit/766fb50))
- **data-table:** Improve typing and add target to store instead of row selection ([b0b1522](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b0b1522))
- **data-table:** Add refresh action to centralize request ([602c9ce](https://github.com/soyluisarrieta/laravel-starter-kit/commit/602c9ce))
- **data-table:** Avoid extending RowId everywhere ([66c21ee](https://github.com/soyluisarrieta/laravel-starter-kit/commit/66c21ee))
- **users): refactor(users:** Extract cell components ([2562d18](https://github.com/soyluisarrieta/laravel-starter-kit/commit/2562d18))
- **data-table:** Use dropdown menu for column sorting with chevron icons ([fa475f8](https://github.com/soyluisarrieta/laravel-starter-kit/commit/fa475f8))
- **data-table:** Modularize into cohesive module with slices ([5c1126e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/5c1126e))

### 📖 Documentation

- Add README with setup instructions for starter kit ([82ac962](https://github.com/soyluisarrieta/laravel-starter-kit/commit/82ac962))
- Update README with features and integrations list ([347cd0d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/347cd0d))
- Add AGENTS.md for AI ([57a1a1d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/57a1a1d))
- Add initial README.md with project setup and guidelines ([67b69e8](https://github.com/soyluisarrieta/laravel-starter-kit/commit/67b69e8))
- **claude:** Add skills for AI agents ([a14010a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a14010a))
- Fix missing dot in react-19 skill ([daafd47](https://github.com/soyluisarrieta/laravel-starter-kit/commit/daafd47))
- Add Git merge steps with a visible fork ([f1008bc](https://github.com/soyluisarrieta/laravel-starter-kit/commit/f1008bc))
- Update git and commit guidelines ([4c1b9e5](https://github.com/soyluisarrieta/laravel-starter-kit/commit/4c1b9e5))
- Add git merge workflow to README ([1c83b97](https://github.com/soyluisarrieta/laravel-starter-kit/commit/1c83b97))
- Add INIT.md agent instructions and release section ([0220eee](https://github.com/soyluisarrieta/laravel-starter-kit/commit/0220eee))

### 📦 Build

- **ci:** Automate the versioning ([59535d6](https://github.com/soyluisarrieta/laravel-starter-kit/commit/59535d6))
- Add @soyluisarrieta/eslint package and update config ([9535664](https://github.com/soyluisarrieta/laravel-starter-kit/commit/9535664))
- Switch package manager from npm to bun ([15c8bc0](https://github.com/soyluisarrieta/laravel-starter-kit/commit/15c8bc0))
- **versioning:** Add changelogen release script ([845ae73](https://github.com/soyluisarrieta/laravel-starter-kit/commit/845ae73))
- **commitlint:** Add husky and commitlint hooks ([bac6ac5](https://github.com/soyluisarrieta/laravel-starter-kit/commit/bac6ac5))

### 🏡 Chore

- **release:** 0.0.1 ([d83e67e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d83e67e))
- **release:** 0.0.2 ([b9c90d1](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b9c90d1))
- Translate UI texts ([c3197bb](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c3197bb))
- **release:** 0.0.3 ([b1ce199](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b1ce199))
- Rename name project in package.json ([1ad219d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/1ad219d))
- **release:** 0.0.4 ([b5a0bf5](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b5a0bf5))
- **release:** 0.0.5 ([7277e7d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/7277e7d))
- Set timezone to UTC ([9311515](https://github.com/soyluisarrieta/laravel-starter-kit/commit/9311515))
- **release:** 0.0.6 ([d7f24b8](https://github.com/soyluisarrieta/laravel-starter-kit/commit/d7f24b8))
- **release:** 0.0.7 ([1c2873d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/1c2873d))
- Add jsx-indent rule in eslint.config and delete prettier files ([cd8815f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/cd8815f))
- **release:** 0.0.8 ([a61f9ee](https://github.com/soyluisarrieta/laravel-starter-kit/commit/a61f9ee))
- Change bun to pnpm ([441cb30](https://github.com/soyluisarrieta/laravel-starter-kit/commit/441cb30))
- Add getting-started script to composer.json for easier setup ([052062a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/052062a))
- Update composer scripts for better setup flow ([17bf833](https://github.com/soyluisarrieta/laravel-starter-kit/commit/17bf833))
- Initialize project ([92119b8](https://github.com/soyluisarrieta/laravel-starter-kit/commit/92119b8))
- Remove prettier plugin organize imports ([71d215a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/71d215a))
- Install and configure Spatie Laravel Permission ([30dad0f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/30dad0f))
- Integrate Laravel IDE Helper for development ([2b1f5c7](https://github.com/soyluisarrieta/laravel-starter-kit/commit/2b1f5c7))
- Install and configure Tanstack Query ([82538cf](https://github.com/soyluisarrieta/laravel-starter-kit/commit/82538cf))
- Refactor tanstack table agumentation type file ([1527733](https://github.com/soyluisarrieta/laravel-starter-kit/commit/1527733))
- Add support for combo permissions ([b05e428](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b05e428))

### ✅ Tests

- **data-table:** Add pagination, sorting, and searching tests ([39da519](https://github.com/soyluisarrieta/laravel-starter-kit/commit/39da519))
- **users:** Add UserController feature tests ([221d40b](https://github.com/soyluisarrieta/laravel-starter-kit/commit/221d40b))
- **roles:** Add RoleController feature tests ([fd901ec](https://github.com/soyluisarrieta/laravel-starter-kit/commit/fd901ec))
- **data-table:** Add HasDataTable trait integration tests ([5c641be](https://github.com/soyluisarrieta/laravel-starter-kit/commit/5c641be))
- **socialite:** Add SocialiteController feature tests ([e5cf94e](https://github.com/soyluisarrieta/laravel-starter-kit/commit/e5cf94e))

### 🎨 Styles

- Add cursor pointer to options menu buttons ([23055ae](https://github.com/soyluisarrieta/laravel-starter-kit/commit/23055ae))
- Add cursor pointer in button ui component ([29b5a9b](https://github.com/soyluisarrieta/laravel-starter-kit/commit/29b5a9b))
- Apply eslint for entire react project ([b1ca93a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/b1ca93a))
- Apply eslint rules ([33a01c9](https://github.com/soyluisarrieta/laravel-starter-kit/commit/33a01c9))
- **data-table:** Improve table styling with rounded borders and better spacing ([6da1d55](https://github.com/soyluisarrieta/laravel-starter-kit/commit/6da1d55))
- **data-table:** Improve tabs list class readability by splitting long line ([5624739](https://github.com/soyluisarrieta/laravel-starter-kit/commit/5624739))
- Add main-container class ([39a3fcb](https://github.com/soyluisarrieta/laravel-starter-kit/commit/39a3fcb))
- Apply linting and formating ([88ab33b](https://github.com/soyluisarrieta/laravel-starter-kit/commit/88ab33b))
- **roles:** Rename label roles and improve column headers ([c5d46d2](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c5d46d2))
- **ui:** Add cursor pointer in checkbox ([c70ea79](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c70ea79))
- **roles:** Ajust table widths ([6a43da2](https://github.com/soyluisarrieta/laravel-starter-kit/commit/6a43da2))
- **roles:** Add badge color to role header ([cb6175d](https://github.com/soyluisarrieta/laravel-starter-kit/commit/cb6175d))
- Run code formatter ([7c0116c](https://github.com/soyluisarrieta/laravel-starter-kit/commit/7c0116c))
- **data-table:** Fix sticky column background ([3b8d696](https://github.com/soyluisarrieta/laravel-starter-kit/commit/3b8d696))
- **data-table:** Improve code formatting ([c701c9f](https://github.com/soyluisarrieta/laravel-starter-kit/commit/c701c9f))

### 🤖 CI

- Switch from npm to pnpm in GitHub workflows ([7e81633](https://github.com/soyluisarrieta/laravel-starter-kit/commit/7e81633))
- Add pnpm installation to workflows ([59c355b](https://github.com/soyluisarrieta/laravel-starter-kit/commit/59c355b))
- Remove pnpm cache from GitHub workflows ([54d5124](https://github.com/soyluisarrieta/laravel-starter-kit/commit/54d5124))
- Change dependency installation from pnpm ci to pnpm install ([9ae533a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/9ae533a))
- Disable lint and test workflows temporarily ([2c85ae7](https://github.com/soyluisarrieta/laravel-starter-kit/commit/2c85ae7))
- **release:** Automate GitHub releases on tag push ([434d43a](https://github.com/soyluisarrieta/laravel-starter-kit/commit/434d43a))

### ❤️ Contributors

- Luis Arrieta <luisarrieta796@gmail.com>
- Soyluisarrieta <luisarrieta796@gmail.com>

