---
title: Onboarding
permalink: onboarding
---
# Introduction
Look no further, this is the easiest way to get started using the gjeldsregister. 

A printed version of the onboarding doc can be found here: <a href="{{site.links.onboarding_doc}}">Onboarding document</a>. 
Standards are found here: <a href="{{site.links.standard_doc}}">Standards Specification v1.2.0</a> and <a href="{{site.links.security_doc}}">Security Document v1.3.0</a>.
<img 
    src="{{ 'assets/images/onboarding-process.svg' | relative_url }}"
    alt="Onboarding steps"
    class="w-100 mt-5"
/>

## Process
The process from project initialization to production ready consists of several phases as shown in the above diagram. 

1. [Startup]({{ "onboarding/startup" | relative_url }})
2. [Development & test]({{ "onboarding/development-and-test" | relative_url }})
3. [Verification]({{ "onboarding/verification" | relative_url }})
4. [Production]({{ "onboarding/production" | relative_url }})

<div class="mt-5">
    {% assign faq = site.data.navigation | where: "name", "FAQ" | first %}
    Also, you can visit our FAQ page:<br />
    <a href="{{ faq.link }}">{{ faq.link }}</a>
</div>

<div class="mt-5">
Yours,<br />
Infotorg team.
</div>
