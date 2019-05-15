





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-3+HOqCwtQal5hOJQ+mdxiq5zmGOTjF6RhjDsPLxbKDYgGlLFeCwzoIanb7j5IiCuXKUqyC2q8FdkC4nmx2P2rA==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-a2fba223d5af91496cac70d4ec3624df.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-ueIbDcC+5NVy8gKKVcQtEfcVQDzFzENaRzxohgwreG7GttAKhQClD5Lc8NNgVQ2QzRQoFYN0ZTeGNPIBg7ze0w==" rel="stylesheet" href="https://github.githubassets.com/assets/github-51b892aabae3537526e0f9a1c3a58c8f.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>beginner-tensorflowjs-examples-in-javascript/posenet-for-tfjs104-min.js at master · hpssjellis/beginner-tensorflowjs-examples-in-javascript</title>
    <meta name="description" content="For anyone who knows a bit of Javascript and wants to know some Machine Learning - hpssjellis/beginner-tensorflowjs-examples-in-javascript">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars0.githubusercontent.com/u/5605614?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="hpssjellis/beginner-tensorflowjs-examples-in-javascript" /><meta name="twitter:description" content="For anyone who knows a bit of Javascript and wants to know some Machine Learning - hpssjellis/beginner-tensorflowjs-examples-in-javascript" />
    <meta property="og:image" content="https://avatars0.githubusercontent.com/u/5605614?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="hpssjellis/beginner-tensorflowjs-examples-in-javascript" /><meta property="og:url" content="https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript" /><meta property="og:description" content="For anyone who knows a bit of Javascript and wants to know some Machine Learning - hpssjellis/beginner-tensorflowjs-examples-in-javascript" />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MzU5MzYwMDg3OjI1ZDAyNzBiZGE0ODE0ZWIwNDhjNmU2YjExNjE3Y2YzMjMwNTUyM2JkZmU2MDViM2JmNDNiNGRlNTIwNzNhMWQ=--867cc4b6e1f144529d1d790f982ee11ec24a1f68">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="C485:56B3:1AC252:31BECE:5CD47F92" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="C485:56B3:1AC252:31BECE:5CD47F92" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="5605614" /><meta name="octolytics-actor-login" content="hpssjellis" /><meta name="octolytics-actor-hash" content="5d2085726cc880cd4648bd358eeb1c753eb58e5e588cfd72ce94d918061c1dbf" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="53faedf4e8015b1370fd94eb5b561881">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="hpssjellis">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="YjJhMTNhZGRlMjA5Nzk0NzExYjI2ZTAyMmNlZDFhNzkwYzllMDE2ZTE3MjQ1ZDRlNDJkYzZmZDlmNDFjMTk3OHx7InJlbW90ZV9hZGRyZXNzIjoiNjQuMTE0LjIwNy4xNDkiLCJyZXF1ZXN0X2lkIjoiQzQ4NTo1NkIzOjFBQzI1MjozMUJFQ0U6NUNENDdGOTIiLCJ0aW1lc3RhbXAiOjE1NTc0MzAxNjIsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,NOTIFY_ON_BLOCK,RELATED_ISSUES">

  <meta name="html-safe-nonce" content="cb2a24a6a282a36d70b05683319e367740cd54ec">

  <meta http-equiv="x-pjax-version" content="9cbf83ee2cc8278dea880f125bbaf0d4">
  

      <link href="https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/commits/master.atom" rel="alternate" title="Recent Commits to beginner-tensorflowjs-examples-in-javascript:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript git https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript.git">

  <meta name="octolytics-dimension-user_id" content="5605614" /><meta name="octolytics-dimension-user_login" content="hpssjellis" /><meta name="octolytics-dimension-repository_id" content="127588269" /><meta name="octolytics-dimension-repository_nwo" content="hpssjellis/beginner-tensorflowjs-examples-in-javascript" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="127588269" /><meta name="octolytics-dimension-repository_network_root_nwo" content="hpssjellis/beginner-tensorflowjs-examples-in-javascript" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/blob/master/tfjsv1/backups/posenet-for-tfjs104-min.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-enabled" content="true">



  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive min-width-0 page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    


          <header class="Header js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">

    <div class="Header-item d-none d-lg-flex">
      <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

    </div>

    <div class="Header-item d-lg-none">
      <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
      </button>
    </div>

    <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
        <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="127588269" data-scoped-search-url="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/search" data-unscoped-search-url="/search" action="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=cXbpJO8CAx+rgZPmONQw/nsPPrTPGwNTazk3X7C8Np+OxdTbzPnvWrnmp4u1J003RIgoP2CCDI4ZhxXjUEdroQ=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


      <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link d-block d-lg-none py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>
    <div>
      <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>        
    </div>

  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>
    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" aria-label="View profile and more" aria-expanded="false" aria-haspopup="false" href="https://github.com/hpssjellis">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/5605614?s=40&amp;v=4" width="20" height="20" alt="@hpssjellis" />
      hpssjellis
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="9mendFwjJ5AmitZqjyjPt1lzJsWmmCGB479lKyP3T59+OAz/Q4fJpOyd5RCl3HMRcq1JxOH4p6vKXYh9m//NxA==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"/></svg>
        Sign out
      </button>
</form></nav>

    </div>

    <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
      <div class="css-truncate css-truncate-target width-fit position-absolute left-0 right-0 text-center">
              <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a class="Header-link" href="/hpssjellis">hpssjellis</a>
    /
    <a class="Header-link" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript">beginner-tensorflowjs-examples-in-javascript</a>

</div>
    </div>

    <div class="Header-item position-relative d-none d-lg-flex">
      

    </div>

    <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
      
    <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:5605614" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </div>


    <div class="Header-item position-relative d-none d-lg-flex">
      <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="hpssjellis/beginner-tensorflowjs-examples-in-javascript">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/issues/new" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0 d-none d-lg-flex">
      
<details class="details-overlay details-reset">
  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img alt="@hpssjellis" class="avatar" src="https://avatars1.githubusercontent.com/u/5605614?s=40&amp;v=4" height="20" width="20">
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/hpssjellis" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">hpssjellis</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit " aria-haspopup="dialog" role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:5605614,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:5605614,&quot;client_id&quot;:&quot;832866498.1534798826&quot;,&quot;originating_request_id&quot;:&quot;C485:56B3:1AC252:31BECE:5CD47F92&quot;,&quot;originating_url&quot;:&quot;https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/blob/master/tfjsv1/backups/posenet-for-tfjs104-min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/tree/master/tfjsv1/backups&quot;}}" data-hydro-click-hmac="cd4c3ec912f1963a883b47639ed9ffe85e05299804089955a06f6847c8667eba">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
</summary>    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="RleNve+u0KAMNySyUZAaEB1WQVxqNAuQZKGBGzX4oBCzpUu9tgwx/3gSuqyCHas8lFes5G4Ow4ziDN7w1s2F7w==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container js-suggester-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <input type="text" autocomplete="off" data-maxlength="80" class="js-suggester-field d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field" placeholder="What's happening?" name="message" value="" aria-label="What is your current status?">
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div class="suggester-container">
              <div class="suggester js-suggester js-navigation-container" data-url="/autocomplete/user-suggestions" data-no-org-url="/autocomplete/user-suggestions" data-org-url="/suggestions" hidden>
              </div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true" id="limited-availability-truncate-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
            

<div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2019-05-09T12:59:22-07:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2019-05-09T13:29:22-07:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2019-05-09T16:29:22-07:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2019-05-09T23:59:59-07:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2019-05-12T23:59:59-07:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>


    <a role="menuitem" class="dropdown-item" href="/hpssjellis" data-ga-click="Header, go to profile, text:your profile">Your profile</a>
    <a role="menuitem" class="dropdown-item" href="/hpssjellis?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/hpssjellis?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/hpssjellis?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a>

    <div role="none" class="dropdown-divider"></div>
    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="hOvyw+OGL33S29K8M2NpG2hWGDCx/vcR1c118uDZTSwMtFlI/CLBSRjM4cYZl9W9Q4h3MfaecTv8L5ikWNHPdw==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
</form>  </details-menu>
</details>

    </div>

  </header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      


  






  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4 ">
    <div class="repohead-details-container clearfix container-lg p-responsive d-none d-lg-block">

      <ul class="pagehead-actions">




  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="+tTPQqA5+qCmu6QYMIBNKDqerDD6bCTKHaew88rKmTd4QSOe/dsWRnpl9DjmLerHF7Zo4Z34rokY5/FfdWtv6Q==" />      <input type="hidden" name="repository_id" value="127588269">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:127588269,&quot;client_id&quot;:&quot;832866498.1534798826&quot;,&quot;originating_request_id&quot;:&quot;C485:56B3:1AC252:31BECE:5CD47F92&quot;,&quot;originating_url&quot;:&quot;https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/blob/master/tfjsv1/backups/posenet-for-tfjs104-min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/tree/master/tfjsv1/backups&quot;,&quot;user_id&quot;:5605614}}" data-hydro-click-hmac="3949760492799defe64b2c6e70ca36ba1360a65958614dbf66ba26a6a21d5f98" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Unwatch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/watchers"
          aria-label="3 users are watching this repository">
          3
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="CPkAGjIxVSQHzKvsbPChDxPTMshV+0OJ4K/jAvZaqK3hgyezdVHO7cCvereXJ05/rZ/UQGK62yFA2MnWlRdoxw==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar hpssjellis/beginner-tensorflowjs-examples-in-javascript" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:127588269,&quot;client_id&quot;:&quot;832866498.1534798826&quot;,&quot;originating_request_id&quot;:&quot;C485:56B3:1AC252:31BECE:5CD47F92&quot;,&quot;originating_url&quot;:&quot;https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/blob/master/tfjsv1/backups/posenet-for-tfjs104-min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/tree/master/tfjsv1/backups&quot;,&quot;user_id&quot;:5605614}}" data-hydro-click-hmac="5919677ff93a601dfe459988b649376bb10fc08f7601e8f4f9b94b856cc8ffc9" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
</button>        <a class="social-count js-social-count" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/stargazers"
           aria-label="35 users starred this repository">
          35
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="inVnZPqWLv12DiTnaXANLG8pM8zhyRlZKuvH1h+Tu9vUg0p+1YeNecg9PJIiKkYgldXAgcqu/siN5mSFoSNGTw==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star hpssjellis/beginner-tensorflowjs-examples-in-javascript" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:127588269,&quot;client_id&quot;:&quot;832866498.1534798826&quot;,&quot;originating_request_id&quot;:&quot;C485:56B3:1AC252:31BECE:5CD47F92&quot;,&quot;originating_url&quot;:&quot;https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/blob/master/tfjsv1/backups/posenet-for-tfjs104-min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/tree/master/tfjsv1/backups&quot;,&quot;user_id&quot;:5605614}}" data-hydro-click-hmac="c849a119be8baa97ebfbf8a3fe599ad505ac3c1eabc9c203fa472d6e82dcbf6a" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
</button>        <a class="social-count js-social-count" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/stargazers"
           aria-label="35 users starred this repository">
          35
        </a>
</form>  </div>

  </li>

  <li>
          <details class="details-reset details-overlay details-overlay-dark d-inline-block float-left">
            <summary class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:127588269,&quot;client_id&quot;:&quot;832866498.1534798826&quot;,&quot;originating_request_id&quot;:&quot;C485:56B3:1AC252:31BECE:5CD47F92&quot;,&quot;originating_url&quot;:&quot;https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/blob/master/tfjsv1/backups/posenet-for-tfjs104-min.js&quot;,&quot;referrer&quot;:&quot;https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript/tree/master/tfjsv1/backups&quot;,&quot;user_id&quot;:5605614}}" data-hydro-click-hmac="470be0a6445a4cc33a6683b7bcd9d6e8152d94565357c4168e23e094637cabf0" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" title="Fork your own copy of hpssjellis/beginner-tensorflowjs-examples-in-javascript to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
</summary>            <details-dialog
              class="anim-fade-in fast Box Box--overlay d-flex flex-column"
              src="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/fork?fragment=1"
              preload>
              <div class="Box-header">
                <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
                  <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
                </button>
                <h3 class="Box-title">Fork beginner-tensorflowjs-examples-in-javascript</h3>
              </div>
              <div class="overflow-auto text-center">
                <include-fragment>
                  <div class="octocat-spinner my-3" aria-label="Loading..."></div>
                  <p class="f5 text-gray">If this dialog fails to load, you can visit <a href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/fork">the fork page</a> directly.</p>
                </include-fragment>
              </div>
            </details-dialog>
          </details>

    <a href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/network/members" class="social-count"
       aria-label="14 users forked this repository">
      14
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=5605614" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/hpssjellis">hpssjellis</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript">beginner-tensorflowjs-examples-in-javascript</a></strong>
  

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /hpssjellis/beginner-tensorflowjs-examples-in-javascript" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /hpssjellis/beginner-tensorflowjs-examples-in-javascript/issues" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /hpssjellis/beginner-tensorflowjs-examples-in-javascript/pulls" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>



    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /hpssjellis/beginner-tensorflowjs-examples-in-javascript/projects" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /hpssjellis/beginner-tensorflowjs-examples-in-javascript/wiki" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people alerts /hpssjellis/beginner-tensorflowjs-examples-in-javascript/pulse" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_settings repo_branch_settings hooks integration_installations repo_keys_settings issue_template_editor /hpssjellis/beginner-tensorflowjs-examples-in-javascript/settings" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/settings">
      <svg class="octicon octicon-gear" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
      Settings
</a>
</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /hpssjellis/beginner-tensorflowjs-examples-in-javascript" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /hpssjellis/beginner-tensorflowjs-examples-in-javascript/issues" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /hpssjellis/beginner-tensorflowjs-examples-in-javascript/pulls" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="3">
</a>    </span>


      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /hpssjellis/beginner-tensorflowjs-examples-in-javascript/projects" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_wiki /hpssjellis/beginner-tensorflowjs-examples-in-javascript/wiki" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="6">
</a>      </span>

      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /hpssjellis/beginner-tensorflowjs-examples-in-javascript/pulse" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/pulse">
        Pulse
</a>
      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="community /hpssjellis/beginner-tensorflowjs-examples-in-javascript/community" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/community">
          Community
</a>      </span>

  </nav>
</div>


  </div>
<div class="container-lg new-discussion-timeline experiment-repo-nav  p-responsive">
  <div class="repository-content ">

    
    



  
    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/blob/d6f2ab2cf736e61d1e136be8e3338314729e1def/tfjsv1/backups/posenet-for-tfjs104-min.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:6e0414a107429349000e0a3f6a62265c -->
      

    <div class="d-flex flex-items-start mb-3 flex-column flex-md-row">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target">master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/ref-list/master/tfjsv1/backups/posenet-for-tfjs104-min.js?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="tfjsv1/backups/posenet-for-tfjs104-min.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript"><span>beginner-tensorflowjs-examples-in-javascript</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/tree/master/tfjsv1"><span>tfjsv1</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/tree/master/tfjsv1/backups"><span>backups</span></a></span><span class="separator">/</span><strong class="final-path">posenet-for-tfjs104-min.js</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="tfjsv1/backups/posenet-for-tfjs104-min.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    
  <div class="Box Box--condensed d-flex flex-column flex-shrink-0">
      <div class="Box-body d-flex flex-justify-between bg-blue-light flex-column flex-md-row flex-items-start flex-md-items-center">
        <span class="pr-md-4 f6">
          <a rel="author" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=5605614" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/hpssjellis"><img class="avatar" src="https://avatars1.githubusercontent.com/u/5605614?s=40&amp;v=4" width="20" height="20" alt="@hpssjellis" /></a>
          <a class="text-bold link-gray-dark lh-default v-align-middle" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=5605614" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/hpssjellis">hpssjellis</a>
            <span class="lh-default v-align-middle">
              <a data-pjax="true" title="Create posenet-for-tfjs104-min.js" class="link-gray" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/commit/06c7c25fb9825652a676a376e694be50819b4092">Create posenet-for-tfjs104-min.js</a>
            </span>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom f6 mt-2 mt-md-0">
          <a class="pr-2 text-mono link-gray" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/commit/06c7c25fb9825652a676a376e694be50819b4092" data-pjax>06c7c25</a>
          <relative-time datetime="2019-04-13T15:37:53Z">Apr 13, 2019</relative-time>
        </span>
      </div>

    <div class="Box-body d-flex flex-items-center flex-auto f6 border-bottom-0 flex-wrap" >
      <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
        <summary class="btn-link" aria-haspopup="dialog">
          <span><strong>1</strong> contributor</span>
        </summary>
        <details-dialog
          class="Box Box--overlay d-flex flex-column anim-fade-in fast"
          aria-label="Users who have contributed to this file"
          src="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/contributors/master/tfjsv1/backups/posenet-for-tfjs104-min.js/list" preload>
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
            </button>
            <h3 class="Box-title">
              Users who have contributed to this file
            </h3>
          </div>
          <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
        </details-dialog>
      </details>
    </div>
  </div>






    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">

  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">
      3 lines (2 sloc)
      <span class="file-info-divider"></span>
    17.5 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/raw/master/tfjsv1/backups/posenet-for-tfjs104-min.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/blame/master/tfjsv1/backups/posenet-for-tfjs104-min.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/commits/master/tfjsv1/backups/posenet-for-tfjs104-min.js">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw hide-sm"
               href="github-windows://openRepo/https://github.com/hpssjellis/beginner-tensorflowjs-examples-in-javascript?branch=master&amp;filepath=tfjsv1%2Fbackups%2Fposenet-for-tfjs104-min.js"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:windows">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/edit/master/tfjsv1/backups/posenet-for-tfjs104-min.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="z30HknHIlWVv63k57+wf5cULO0DBJhJjRpyHRZh9jgwECrs7qqXp+M+Y21ecNY63SPcO5yT6Sh/Ktyrc/tOnhA==" />
              <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
                aria-label="Edit this file" data-hotkey="e" data-disable-with>
                <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
              </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/delete/master/tfjsv1/backups/posenet-for-tfjs104-min.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="6PsDZWf93ULlm8Qa4etz8HOSZ+B8aBbxY2vgmsN3BckXSvhF7oEcUd6KgvvHiC8wrPY6PoJ/OJugwGr+Sr/pZg==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Delete this file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
            </button>
</form>    </div>
  </div>
</div>

      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">// @tensorflow/tfjs-models Copyright 2019 Google</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">!function(e,t){&quot;object&quot;==typeof exports&amp;&amp;&quot;undefined&quot;!=typeof module?t(exports,require(&quot;@tensorflow/tfjs&quot;)):&quot;function&quot;==typeof define&amp;&amp;define.amd?define([&quot;exports&quot;,&quot;@tensorflow/tfjs&quot;],t):t(e.posenet={},e.tf)}(this,function(e,t){&quot;use strict&quot;;var n=function(){function e(e){this.urlPath=e,&quot;/&quot;!==this.urlPath.charAt(this.urlPath.length-1)&amp;&amp;(this.urlPath+=&quot;/&quot;)}return e.prototype.loadManifest=function(){var e=this;return new Promise(function(t,n){var r=new XMLHttpRequest;r.open(&quot;GET&quot;,e.urlPath+&quot;manifest.json&quot;),r.onload=function(){e.checkpointManifest=JSON.parse(r.responseText),t()},r.onerror=function(t){throw new Error(&quot;manifest.json not found at &quot;+e.urlPath+&quot;. &quot;+t)},r.send()})},e.prototype.getCheckpointManifest=function(){var e=this;return null==this.checkpointManifest?new Promise(function(t,n){e.loadManifest().then(function(){t(e.checkpointManifest)})}):new Promise(function(t,n){t(e.checkpointManifest)})},e.prototype.getAllVariables=function(){var e=this;return null!=this.variables?new Promise(function(t,n){t(e.variables)}):new Promise(function(t,n){e.getCheckpointManifest().then(function(n){for(var r=Object.keys(e.checkpointManifest),i=[],o=0;o&lt;r.length;o++)i.push(e.getVariable(r[o]));Promise.all(i).then(function(n){e.variables={};for(var i=0;i&lt;n.length;i++)e.variables[r[i]]=n[i];t(e.variables)})})})},e.prototype.getVariable=function(e){var n=this;if(!(e in this.checkpointManifest))throw new Error(&quot;Cannot load non-existant variable &quot;+e);var r=function(r,i){var o=new XMLHttpRequest;o.responseType=&quot;arraybuffer&quot;;var a=n.checkpointManifest[e].filename;o.open(&quot;GET&quot;,n.urlPath+a),o.onload=function(){if(404===o.status)throw new Error(&quot;Not found variable &quot;+e);var i=new Float32Array(o.response),a=t.Tensor.make(n.checkpointManifest[e].shape,{values:i});r(a)},o.onerror=function(t){throw new Error(&quot;Could not fetch variable &quot;+e+&quot;: &quot;+t)},o.send()};return null==this.checkpointManifest?new Promise(function(e,t){n.loadManifest().then(function(){new Promise(r).then(e)})}):new Promise(r)},e}(),r=[[&quot;conv2d&quot;,2],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,2],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,2],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,2],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1]],i=[8,16,32];function o(e){t.util.assert(&quot;number&quot;==typeof e,function(){return&quot;outputStride is not a number&quot;}),t.util.assert(i.indexOf(e)&gt;=0,function(){return&quot;outputStride of &quot;+e+&quot; is invalid. It must be either 8, 16, or 32&quot;})}function a(e){t.util.assert(&quot;number&quot;==typeof e,function(){return&quot;imageScaleFactor is not a number&quot;}),t.util.assert(e&gt;=.2&amp;&amp;e&lt;=1,function(){return&quot;imageScaleFactor must be between 0.2 and 1.0&quot;})}var s={100:[[&quot;conv2d&quot;,2],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,2],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,2],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,2],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,2],[&quot;separableConv&quot;,1]],75:[[&quot;conv2d&quot;,2],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,2],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,2],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,2],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1],[&quot;separableConv&quot;,1]],50:r,25:r};var u=function(){function e(e,n){this.PREPROCESS_DIVISOR=t.scalar(127.5),this.ONE=t.scalar(1),this.modelWeights=e,this.convolutionDefinitions=n}return e.prototype.predict=function(e,n){var r=this,i=t.div(e.toFloat(),this.PREPROCESS_DIVISOR),o=t.sub(i,this.ONE);return function(e,t){var n=1,r=1;return e.map(function(e,i){var o,a,s=e[0],u=e[1];return n===t?(o=1,a=r,r*=u):(o=u,a=1,n*=u),{blockId:i,convType:s,stride:o,rate:a,outputStride:n}})}(this.convolutionDefinitions,n).reduce(function(e,t){var n=t.blockId,i=t.stride,o=t.convType,a=t.rate;if(&quot;conv2d&quot;===o)return r.conv(e,i,n);if(&quot;separableConv&quot;===o)return r.separableConv(e,i,n,a);throw Error(&quot;Unknown conv type of &quot;+o)},o)},e.prototype.convToOutput=function(e,t){return e.conv2d(this.weights(t),1,&quot;same&quot;).add(this.convBias(t))},e.prototype.conv=function(e,t,n){var r=this.weights(&quot;Conv2d_&quot;+String(n));return e.conv2d(r,t,&quot;same&quot;).add(this.convBias(&quot;Conv2d_&quot;+String(n))).clipByValue(0,6)},e.prototype.separableConv=function(e,t,n,r){void 0===r&amp;&amp;(r=1);var i=&quot;Conv2d_&quot;+String(n)+&quot;_depthwise&quot;,o=&quot;Conv2d_&quot;+String(n)+&quot;_pointwise&quot;;return e.depthwiseConv2D(this.depthwiseWeights(i),t,&quot;same&quot;,&quot;NHWC&quot;,r).add(this.depthwiseBias(i)).clipByValue(0,6).conv2d(this.weights(o),[1,1],&quot;same&quot;).add(this.convBias(o)).clipByValue(0,6)},e.prototype.weights=function(e){return this.modelWeights.weights(e)},e.prototype.convBias=function(e){return this.modelWeights.convBias(e)},e.prototype.depthwiseBias=function(e){return this.modelWeights.depthwiseBias(e)},e.prototype.depthwiseWeights=function(e){return this.modelWeights.depthwiseWeights(e)},e.prototype.dispose=function(){this.modelWeights.dispose()},e}();function l(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})}function c(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&amp;i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},&quot;function&quot;==typeof Symbol&amp;&amp;(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError(&quot;Generator is already executing.&quot;);for(;a;)try{if(n=1,r&amp;&amp;(i=2&amp;o[0]?r.return:o[0]?r.throw||((i=r.return)&amp;&amp;i.call(r),0):r.next)&amp;&amp;!(i=i.call(r,o[1])).done)return i;switch(r=0,i&amp;&amp;(o=[2&amp;o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length&gt;0&amp;&amp;i[i.length-1])&amp;&amp;(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&amp;&amp;(!i||o[1]&gt;i[0]&amp;&amp;o[1]&lt;i[3])){a.label=o[1];break}if(6===o[0]&amp;&amp;a.label&lt;i[1]){a.label=i[1],i=o;break}if(i&amp;&amp;a.label&lt;i[2]){a.label=i[2],a.ops.push(o);break}i[2]&amp;&amp;a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&amp;o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var f=[&quot;nose&quot;,&quot;leftEye&quot;,&quot;rightEye&quot;,&quot;leftEar&quot;,&quot;rightEar&quot;,&quot;leftShoulder&quot;,&quot;rightShoulder&quot;,&quot;leftElbow&quot;,&quot;rightElbow&quot;,&quot;leftWrist&quot;,&quot;rightWrist&quot;,&quot;leftHip&quot;,&quot;rightHip&quot;,&quot;leftKnee&quot;,&quot;rightKnee&quot;,&quot;leftAnkle&quot;,&quot;rightAnkle&quot;],p=f.length,h=f.reduce(function(e,t,n){return e[t]=n,e},{}),v=[[&quot;nose&quot;,&quot;leftEye&quot;],[&quot;leftEye&quot;,&quot;leftEar&quot;],[&quot;nose&quot;,&quot;rightEye&quot;],[&quot;rightEye&quot;,&quot;rightEar&quot;],[&quot;nose&quot;,&quot;leftShoulder&quot;],[&quot;leftShoulder&quot;,&quot;leftElbow&quot;],[&quot;leftElbow&quot;,&quot;leftWrist&quot;],[&quot;leftShoulder&quot;,&quot;leftHip&quot;],[&quot;leftHip&quot;,&quot;leftKnee&quot;],[&quot;leftKnee&quot;,&quot;leftAnkle&quot;],[&quot;nose&quot;,&quot;rightShoulder&quot;],[&quot;rightShoulder&quot;,&quot;rightElbow&quot;],[&quot;rightElbow&quot;,&quot;rightWrist&quot;],[&quot;rightShoulder&quot;,&quot;rightHip&quot;],[&quot;rightHip&quot;,&quot;rightKnee&quot;],[&quot;rightKnee&quot;,&quot;rightAnkle&quot;]],d=[[&quot;leftHip&quot;,&quot;leftShoulder&quot;],[&quot;leftElbow&quot;,&quot;leftShoulder&quot;],[&quot;leftElbow&quot;,&quot;leftWrist&quot;],[&quot;leftHip&quot;,&quot;leftKnee&quot;],[&quot;leftKnee&quot;,&quot;leftAnkle&quot;],[&quot;rightHip&quot;,&quot;rightShoulder&quot;],[&quot;rightElbow&quot;,&quot;rightShoulder&quot;],[&quot;rightElbow&quot;,&quot;rightWrist&quot;],[&quot;rightHip&quot;,&quot;rightKnee&quot;],[&quot;rightKnee&quot;,&quot;rightAnkle&quot;],[&quot;leftShoulder&quot;,&quot;rightShoulder&quot;],[&quot;leftHip&quot;,&quot;rightHip&quot;]].map(function(e){var t=e[0],n=e[1];return[h[t],h[n]]});var m=Number.NEGATIVE_INFINITY,b=Number.POSITIVE_INFINITY;function g(e){return e.reduce(function(e,t){var n=e.maxX,r=e.maxY,i=e.minX,o=e.minY,a=t.position,s=a.x,u=a.y;return{maxX:Math.max(n,s),maxY:Math.max(r,u),minX:Math.min(i,s),minY:Math.min(o,u)}},{maxX:m,maxY:m,minX:b,minY:b})}function y(e,n){return void 0===n&amp;&amp;(n=&quot;float32&quot;),l(this,void 0,void 0,function(){var r;return c(this,function(i){switch(i.label){case 0:return[4,e.data()];case 1:return r=i.sent(),[2,t.buffer(e.shape,n,r)]}})})}function w(e,t,n){return{score:e.score,keypoints:e.keypoints.map(function(e){var r=e.score,i=e.part,o=e.position;return{score:r,part:i,position:{x:o.x*n,y:o.y*t}}})}}function _(e,t,n){var r=t*e-1;return r-r%n+1}function x(e){return e instanceof t.Tensor?[e.shape[0],e.shape[1]]:[e.height,e.width]}function C(e,n,r,i){return t.tidy(function(){var o=function(e){return e instanceof t.Tensor?e:t.browser.fromPixels(e)}(e);return i?o.reverse(1).resizeBilinear([n,r]):o.resizeBilinear([n,r])})}function E(e){return Math.floor(e/2)}var k=function(){function e(e,t){this.priorityQueue=new Array(e),this.numberOfElements=-1,this.getElementValue=t}return e.prototype.enqueue=function(e){this.priorityQueue[++this.numberOfElements]=e,this.swim(this.numberOfElements)},e.prototype.dequeue=function(){var e=this.priorityQueue[0];return this.exchange(0,this.numberOfElements--),this.sink(0),this.priorityQueue[this.numberOfElements+1]=null,e},e.prototype.empty=function(){return-1===this.numberOfElements},e.prototype.size=function(){return this.numberOfElements+1},e.prototype.all=function(){return this.priorityQueue.slice(0,this.numberOfElements+1)},e.prototype.max=function(){return this.priorityQueue[0]},e.prototype.swim=function(e){for(;e&gt;0&amp;&amp;this.less(E(e),e);)this.exchange(e,E(e)),e=E(e)},e.prototype.sink=function(e){for(;2*e&lt;=this.numberOfElements;){var t=2*e;if(t&lt;this.numberOfElements&amp;&amp;this.less(t,t+1)&amp;&amp;t++,!this.less(e,t))break;this.exchange(e,t),e=t}},e.prototype.getValueAt=function(e){return this.getElementValue(this.priorityQueue[e])},e.prototype.less=function(e,t){return this.getValueAt(e)&lt;this.getValueAt(t)},e.prototype.exchange=function(e,t){var n=this.priorityQueue[e];this.priorityQueue[e]=this.priorityQueue[t],this.priorityQueue[t]=n},e}();function S(e,t,n,r,i,o){for(var a=o.shape,s=a[0],u=a[1],l=!0,c=Math.max(n-i,0),f=Math.min(n+i+1,s),p=c;p&lt;f;++p){for(var h=Math.max(r-i,0),v=Math.min(r+i+1,u),d=h;d&lt;v;++d)if(o.get(p,d,e)&gt;t){l=!1;break}if(!l)break}return l}function M(e,t,n,r){return{y:r.get(e,t,n),x:r.get(e,t,n+p)}}function P(e,t,n){var r=M(e.heatmapY,e.heatmapX,e.id,n),i=r.y,o=r.x;return{x:e.heatmapX*t+o,y:e.heatmapY*t+i}}function O(e,t,n){return e&lt;t?t:e&gt;n?n:e}function N(e,t){return{x:e.x+t.x,y:e.y+t.y}}var T=v.map(function(e){var t=e[0],n=e[1];return[h[t],h[n]]}),B=T.map(function(e){return e[1]}),A=T.map(function(e){return e[0]});function V(e,t,n,r){return{y:O(Math.round(e.y/t),0,n-1),x:O(Math.round(e.x/t),0,r-1)}}function I(e,t,n,r,i,o,a){var s=r.shape,u=s[0],l=s[1],c=function(e,t,n){var r=n.shape[2]/2;return{y:n.get(t.y,t.x,e),x:n.get(t.y,t.x,r+e)}}(e,V(t.position,o,u,l),a),p=V(N(t.position,c),o,u,l),h=M(p.y,p.x,n,i),v=r.get(p.y,p.x,n);return{position:N({x:p.x*o,y:p.y*o},{x:h.x,y:h.y}),part:f[n],score:v}}function W(e,t,n,r,i,o){var a=t.shape[2],s=B.length,u=new Array(a),l=e.part,c=e.score,p=P(l,r,n);u[l.id]={score:c,part:f[l.id],position:p};for(var h=s-1;h&gt;=0;--h){var v=B[h],d=A[h];u[v]&amp;&amp;!u[d]&amp;&amp;(u[d]=I(h,u[v],d,t,n,r,o))}for(h=0;h&lt;s;++h){v=A[h],d=B[h];u[v]&amp;&amp;!u[d]&amp;&amp;(u[d]=I(h,u[v],d,t,n,r,i))}return u}function F(e,t,n,r){var i=n.x,o=n.y;return e.some(function(e){var n,a,s,u,l,c,f=e.keypoints[r].position;return n=o,a=i,s=f.y,u=f.x,(l=s-n)*l+(c=u-a)*c&lt;=t})}function H(e,t,n){return n.reduce(function(n,r,i){var o=r.position,a=r.score;return F(e,t,o,i)||(n+=a),n},0)/n.length}var j=1;function X(e,t,n,r,i,o,a,s){return void 0===a&amp;&amp;(a=.5),void 0===s&amp;&amp;(s=20),l(this,void 0,void 0,function(){var u,f,p,h,v,d,m,b,g,w,_,x;return c(this,function(C){switch(C.label){case 0:return u=[],[4,function(e){return l(this,void 0,void 0,function(){return c(this,function(t){return[2,Promise.all(e.map(function(e){return y(e,&quot;float32&quot;)}))]})})}([e,t,n,r])];case 1:for(f=C.sent(),p=f[0],h=f[1],v=f[2],d=f[3],m=function(e,t,n){for(var r=n.shape,i=r[0],o=r[1],a=r[2],s=new k(i*o*a,function(e){return e.score}),u=0;u&lt;i;++u)for(var l=0;l&lt;o;++l)for(var c=0;c&lt;a;++c){var f=n.get(u,l,c);f&lt;e||S(c,f,u,l,t,n)&amp;&amp;s.enqueue({score:f,part:{heatmapY:u,heatmapX:l,id:c}})}return s}(a,j,p),b=s*s;u.length&lt;o&amp;&amp;!m.empty();)g=m.dequeue(),w=P(g.part,i,h),F(u,b,w,g.part.id)||(_=W(g,p,h,i,v,d),x=H(u,b,_),u.push({keypoints:_,score:x}));return[2,u]}})})}function Y(e){var n=e.shape,r=n[0],i=n[1],o=n[2];return t.tidy(function(){var n,a,s=e.reshape([r*i,o]).argMax(0),u=s.div(t.scalar(i,&quot;int32&quot;)).expandDims(1),l=(n=s,a=i,t.tidy(function(){var e=n.div(t.scalar(a,&quot;int32&quot;));return n.sub(e.mul(t.scalar(a,&quot;int32&quot;)))})).expandDims(1);return t.concat([u,l],1)})}function K(e,t,n,r){return{y:r.get(e,t,n),x:r.get(e,t,n+p)}}function Q(e,n,r){return t.tidy(function(){var i=function(e,n){for(var r=[],i=0;i&lt;p;i++){var o=K(e.get(i,0).valueOf(),e.get(i,1).valueOf(),i,n),a=o.x,s=o.y;r.push(s),r.push(a)}return t.tensor2d(r,[p,2])}(e,r);return e.toTensor().mul(t.scalar(n,&quot;int32&quot;)).toFloat().add(i)})}function R(e,t,n){return l(this,void 0,void 0,function(){var r,i,o,a,s,u,l,p,h,v;return c(this,function(c){switch(c.label){case 0:return r=0,i=Y(e),[4,Promise.all([y(e),y(t),y(i,&quot;int32&quot;)])];case 1:return o=c.sent(),a=o[0],s=o[1],u=o[2],[4,y(l=Q(u,n,s))];case 2:return p=c.sent(),h=Array.from(function(e,t){for(var n=t.shape[0],r=new Float32Array(n),i=0;i&lt;n;i++){var o=t.get(i,0),a=t.get(i,1);r[i]=e.get(o,a,i)}return r}(a,u)),v=h.map(function(e,t){return r+=e,{position:{y:p.get(t,0),x:p.get(t,1)},part:f[t],score:e}}),i.dispose(),l.dispose(),[2,{keypoints:v,score:r/v.length}]}})})}var q=&quot;https://storage.googleapis.com/tfjs-models/weights/posenet/&quot;,D={1.01:{url:q+&quot;mobilenet_v1_101/&quot;,architecture:s[100]},1:{url:q+&quot;mobilenet_v1_100/&quot;,architecture:s[100]},.75:{url:q+&quot;mobilenet_v1_075/&quot;,architecture:s[75]},.5:{url:q+&quot;mobilenet_v1_050/&quot;,architecture:s[50]}},G=function(){function e(e){this.variables=e}return e.prototype.weights=function(e){return this.variables[&quot;MobilenetV1/&quot;+e+&quot;/weights&quot;]},e.prototype.depthwiseBias=function(e){return this.variables[&quot;MobilenetV1/&quot;+e+&quot;/biases&quot;]},e.prototype.convBias=function(e){return this.depthwiseBias(e)},e.prototype.depthwiseWeights=function(e){return this.variables[&quot;MobilenetV1/&quot;+e+&quot;/depthwise_weights&quot;]},e.prototype.dispose=function(){for(var e in this.variables)this.variables[e].dispose()},e}(),z=function(){function e(e){this.mobileNet=e}return e.prototype.predictForSinglePose=function(e,n){var r=this;return void 0===n&amp;&amp;(n=16),o(n),t.tidy(function(){var t=r.mobileNet.predict(e,n),i=r.mobileNet.convToOutput(t,&quot;heatmap_2&quot;),o=r.mobileNet.convToOutput(t,&quot;offset_2&quot;);return{heatmapScores:i.sigmoid(),offsets:o}})},e.prototype.predictForMultiPose=function(e,n){var r=this;return void 0===n&amp;&amp;(n=16),t.tidy(function(){var t=r.mobileNet.predict(e,n),i=r.mobileNet.convToOutput(t,&quot;heatmap_2&quot;),o=r.mobileNet.convToOutput(t,&quot;offset_2&quot;),a=r.mobileNet.convToOutput(t,&quot;displacement_fwd_2&quot;),s=r.mobileNet.convToOutput(t,&quot;displacement_bwd_2&quot;);return{heatmapScores:i.sigmoid(),offsets:o,displacementFwd:a,displacementBwd:s}})},e.prototype.estimateSinglePose=function(e,n,r,i){return void 0===n&amp;&amp;(n=.5),void 0===r&amp;&amp;(r=!1),void 0===i&amp;&amp;(i=16),l(this,void 0,void 0,function(){var s,u,l,f,p,h,v,d,m,b,g,y=this;return c(this,function(c){switch(c.label){case 0:return o(i),a(n),s=x(e),u=s[0],l=s[1],f=_(n,u,i),p=_(n,l,i),h=t.tidy(function(){var t=C(e,f,p,r);return y.predictForSinglePose(t,i)}),v=h.heatmapScores,d=h.offsets,[4,R(v,d,i)];case 1:return m=c.sent(),b=u/f,g=l/p,v.dispose(),d.dispose(),[2,w(m,b,g)]}})})},e.prototype.estimateMultiplePoses=function(e,n,r,i,s,u,f){return void 0===n&amp;&amp;(n=.5),void 0===r&amp;&amp;(r=!1),void 0===i&amp;&amp;(i=16),void 0===s&amp;&amp;(s=5),void 0===u&amp;&amp;(u=.5),void 0===f&amp;&amp;(f=20),l(this,void 0,void 0,function(){var l,p,h,v,d,m,b,g,y,E,k,S=this;return c(this,function(c){switch(c.label){case 0:return o(i),a(n),l=x(e),p=l[0],h=l[1],v=_(n,p,i),d=_(n,h,i),m=t.tidy(function(){var t=C(e,v,d,r);return S.predictForMultiPose(t,i)}),b=m.heatmapScores,g=m.offsets,y=m.displacementFwd,E=m.displacementBwd,[4,X(b,g,y,E,i,s,u,f)];case 1:return k=c.sent(),b.dispose(),g.dispose(),y.dispose(),E.dispose(),[2,function(e,t,n){return 1===n&amp;&amp;1===t?e:e.map(function(e){return w(e,t,n)})}(k,p/v,h/d)]}})})},e.prototype.dispose=function(){this.mobileNet.dispose()},e}();var L={load:function(e){return l(void 0,void 0,void 0,function(){var t,r,i;return c(this,function(o){switch(o.label){case 0:return t=D[e],[4,new n(t.url).getAllVariables()];case 1:return r=o.sent(),i=new G(r),[2,new u(i,t.architecture)]}})})}};e.decodeMultiplePoses=X,e.decodeSinglePose=R,e.MobileNet=u,e.mobileNetArchitectures=s,e.CheckpointLoader=n,e.checkpoints=D,e.partChannels=[&quot;left_face&quot;,&quot;right_face&quot;,&quot;right_upper_leg_front&quot;,&quot;right_lower_leg_back&quot;,&quot;right_upper_leg_back&quot;,&quot;left_lower_leg_front&quot;,&quot;left_upper_leg_front&quot;,&quot;left_upper_leg_back&quot;,&quot;left_lower_leg_back&quot;,&quot;right_feet&quot;,&quot;right_lower_leg_front&quot;,&quot;left_feet&quot;,&quot;torso_front&quot;,&quot;torso_back&quot;,&quot;right_upper_arm_front&quot;,&quot;right_upper_arm_back&quot;,&quot;right_lower_arm_back&quot;,&quot;left_lower_arm_front&quot;,&quot;left_upper_arm_front&quot;,&quot;left_upper_arm_back&quot;,&quot;left_lower_arm_back&quot;,&quot;right_hand&quot;,&quot;right_lower_arm_front&quot;,&quot;left_hand&quot;],e.partIds=h,e.partNames=f,e.poseChain=v,e.load=function(e){return void 0===e&amp;&amp;(e=1.01),l(this,void 0,void 0,function(){var n,r;return c(this,function(i){switch(i.label){case 0:if(null==t)throw new Error(&quot;Cannot find TensorFlow.js. If you are using a &lt;script&gt; tag, please also include @tensorflow/tfjs on the page before using this model.&quot;);return n=Object.keys(D),t.util.assert(&quot;number&quot;==typeof e,function(){return&quot;got multiplier type of &quot;+typeof e+&quot; when it should be a number.&quot;}),t.util.assert(n.indexOf(e.toString())&gt;=0,function(){return&quot;invalid multiplier value of &quot;+e+&quot;.  No checkpoint exists for that multiplier. Must be one of &quot;+n.join(&quot;,&quot;)+&quot;.&quot;}),[4,L.load(e)];case 1:return r=i.sent(),[2,new z(r)]}})})},e.PoseNet=z,e.getAdjacentKeyPoints=function(e,t){return d.reduce(function(n,r){var i=r[0],o=r[1];return function(e,t,n){return e&lt;n||t&lt;n}(e[i].score,e[o].score,t)?n:(n.push([e[i],e[o]]),n)},[])},e.getBoundingBox=g,e.getBoundingBoxPoints=function(e){var t=g(e),n=t.minX,r=t.minY,i=t.maxX,o=t.maxY;return[{x:n,y:r},{x:i,y:r},{x:i,y:o},{x:n,y:o}]},e.scalePose=w,Object.defineProperty(e,&quot;__esModule&quot;,{value:!0})});</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/blame/d6f2ab2cf736e61d1e136be8e3338314729e1def/tfjsv1/backups/posenet-for-tfjs104-min.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/hpssjellis/beginner-tensorflowjs-examples-in-javascript/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 <span title="0.31558s from unicorn-8699cd596c-kfcck">GitHub</span>, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-EmJEhzr7u2Jpws8Qf+eu9k98Pqh/cY5DZEMh5Az37DPYla3I0zmUyVaHert5HRnDJWRdHgq/1+BWRKGTdrwR/w==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-d2cbca34.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-YGtOYDS+/WLBsIawr9q1FWY2BhdLyEK7oqaOdp2saKoqY9CFuH6Y2lHXSRQFFf/3zSAJCY8xJywjGDk0bZ8/aA==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-6024cbdd.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark" open>
    <summary aria-haspopup="dialog" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

