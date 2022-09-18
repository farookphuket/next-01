# next-01
> the repo that I try to learn `nextjs`,`laravel`,`tailwindcss` 
> last update on 9 aug 2022

just to start to learn the typescript with nextjs I am not very good with 
typescript so maybe learn typescript later.






---

# STATUS 
> success on 11 aug 2022


[status_success]:https://archive.org/download/arch_linux_myconfig_24-aug-2022_edit/success_STATUS.png

[status_fail]:https://archive.org/download/arch_linux_myconfig_24-aug-2022_edit/fail_STATUS.png

![status_success]


---

# use laravel with nextjs on live server
> make sure you have do the following


in your nextjs project folder run `npm run build` make sure you don't get any error then copy everything except node_modules folder to the public_html live server

1. separate the laravel backend api and nextjs frontend to difference server for example if the laravel backend is `www.api.domain.com` the nextjs will be on the `www.domain.com`

2. edit laravel's .env file make sure you have this following info
```
# !! IMPORTANT make sure this is your info !! on the real server

# your api url
APP_URL=https://laravel-api.my-domain.com

# your nextjs frontend url
FRONTEND_URL=https://my-domain.com

# if you use sqlite the below line must be absolute path to your DB file
DB_DATABASE=/var/www/absolute/path/to/DB/DB.sqlite

# the session domain 
SESSION_DOMAIN=.my-domain.com

```


---
# to use this code
> please keep in mind that this code will not working unless you have done the following step!

1. clone this repo to your computer(for example in my case i will clone this into my home folder) `git clone https://github.com/farookphuket/next-01.git` then `cd ~/next-01` you will see 2 folders in `next-01` folder `laravel` and `nextjsclient` you now cd into `laravel` folder by issue the command `cd laravel` copy or rename the file `.env.EXAMPLE` to `.env` then edit the `.env` file as this project has `DB.sqlite` to use as `database` so you have to set the absolute file path like this
---

```
APP_URL=http://localhost:8010
FRONTEND_URL=http://localhost:3010
DB_CONNECTION=sqlite

# need absolute path to .sqlite file
DB_DATABASE=/home/farook/next-01/laravel/DB/DB.sqlite


```

as you maybe know that the folder `vendor` is missing so to get it back now run `composer update` then follow by `php artisan serve --port=8010` i use the port 8010 just to make sure that not to mix with your current laravel project 

---
2. now let setup the frontend `cd ../nextjsclient` 
---
# last update `just to remind`



## date 18 Sep 2022
> just upload my project of `nextjs` with `laravel` to live server and it work very well.

[work_1]:https://archive.org/download/arch_linux_myconfig_24-aug-2022_edit/001_work_on_server_18-sep-2022.png

[work_2]:https://archive.org/download/arch_linux_myconfig_24-aug-2022_edit/002_work_on_server_18-sep-2022.png

[work_3]:https://archive.org/download/arch_linux_myconfig_24-aug-2022_edit/003_work_on_server_18-sep-2022.png

make sure you have set this .env file in your laravel project to your info
![work_1]

the .env.local will be like this
![work_2]

---
## date 11 aug 2022
> update today i can use jodit editor

[jodit_setup_1]:https://archive.org/download/arch_linux_myconfig_24-aug-2022_edit/001_jodit-react.png
[jodit_setup_2]:https://archive.org/download/arch_linux_myconfig_24-aug-2022_edit/002_jodit-react.png

to using jodit editor in `nextjs` app just do the following
1. install jodit-react by issue the command `yarn add jodit-react` or `npm install jodit-react` if you use `npm` run the command from your nextjs project folder
2. create the file in your component folder(im my case I create in component/form/RichText.tsx) then put the below code 
---
```language="javascript"
import dynamic from "next/dynamic";

const importJodit = () => import('jodit-react');
const JoditEditor = dynamic(importJodit,{ssr:false});

const RichText = ({...props}) => {
	return <JoditEditor {...props} />
};

export default RichText;
```
---

![jodit_setup_1]

---
3. import the `RichText` component to another component 
---

```language="javascript"

import RichText from '../component/form/RichText';
import {useState} from 'react';  // we need useState to set value

// in your component 

export const Home = () => {
 const [theRichText , setTheRichText] = useState("")
 
 return(
 <div>
 	<form>
		<div>
			<RichText 
			value={theRichText}
			onBlur={e => setTheRichText(e)}
			config={{
			disablePlugins:"powered-by-jodit",
			height:450
			}}
			>
			</RichText>
		</div>
	</form>
 </div>
 )
} 
```

---
![jodit_setup_2]

---
now your jodit editor is ready to get the value to be use in a form object.

---

## date 9 aug 2022
> success to create login with `laravel backend` 

you can now `register` and `login` for the first time.
the code will be in the file `hooks/auth.ts`


---
## date 22 july 2022
fail for authenticate with google
> 22-jul-2022 first day I try to learn nextjs and I try to learn tailwind css 
> from `https://archive.org/details/learn-tailwindcss-the-net-ninja` this is 
> very cool thing i feel so good when i can learn new thing.


> 23-jul-2022 try to learn how to connect nextjs with mongodb using the 
> video from `https://www.youtube.com/watch?v=WSr0GcBF7Ag` so then now i know 
> that i can use mongodb.

> 24-jul-2022 try to setup auth to work by using the video from 
> `https://www.youtube.com/watch?v=bNEAnviNdJM` working well on the localhost 
> but not working when deploy to share hosting it always say server error 

> that's it for now I will try to learn more about nextjs and will see 
> if i could build a website from my study!




[server_error]:https://i.ibb.co/nB5Jk3c/learn-nextjs-day-4.png
![server error][server_error]





## next-01 
> `next-01` is the project that I just start to learn nextjs on the 
> 23-jul-2022 this project will be replace to my main website on share hosting 
> if i finally could make it work in the way that i want to 


### what i want before i replace with nextjs?
> nextjs to replce laravel9+vue3 as I want the page can be read the page 
> source as well vue cannot do that for me (well i cannot find the easy 
> to do so)
> `log-in` system or auth system which is now still not working
> `tailwind css` as the css to replace bulma
> `NoSql` like mongodb to replace MySql 
