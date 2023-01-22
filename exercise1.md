1. Using Ruby as the hypothetical app language, a popular tool for linting is Rubocop at https://rubocop.org/. It appears to work similarly to ESLint, and it even
has some auto-fix features. For testing, Rspec appears to be the most popular choice. Rspec uses syntax similar to JEST with #describe and #it blocks. rbenv/ruby-build 
appears to be a popular tool for building Ruby code. According to the README at https://github.com/rbenv/ruby-build, ruby-build at a minimum 
downloads Ruby source code, extracts it to a local directory, executes a config file, compiles Ruby, and makes sure the installed version of Ruby works. 

2. Some alternatives to Jenkins or GitHub Actions for CI:CD include CircleCI, Travis CI, Shippable, Bamboo. THere are many options and alternatives, but these ones seem
   to pop up most frequently in Google search results. 

3. CircleCI offers both self-hosted and cloud based options, TravisCI is cloud, Shippable (now owned by Jfrog) offers both, Bamboo (owned by atlassian) is a hosted server.
Thus, smaller or medium projects that don't require heavy resource requirements would probably be best with one of the cloud based options. On the other hand, a major project
with a lot of branches and possibly heavy resource requirements would probably benefit more from one of the self-hosted options. 

Total Word count for 3 answers: 208 according to string.split(' ').length()

