# Earth Information Jukebox

### Hear our changing planet · NASA Space Apps Challenge 2026

A web app that turns Earth observation data — temperature, atmospheric CO₂, Arctic sea ice, and sea level — into sound, so you can **hear climate change instead of only reading a chart**.

Built with plain **HTML, CSS, JavaScript, and the Web Audio API**. There is nothing to install or build.

---

## The Challenge

**NASA Space Apps Challenge 2026: Earth Information Jukebox**

Satellites and ground stations have recorded Earth's vital signs for more than a century, but most of that data is presented as charts. Charts can leave out people who are blind or have low vision, while asking everyone else to interpret numbers instead of experiencing a trend.

The challenge is to turn Earth observation data into sound that is:

| Goal | What it means |
|---|---|
|  **Engaging** | Something people want to listen to, not a string of beeps |
|  **Scientifically accurate** | Every sound is computed from real measurements, with no invented data |
|  **Universally accessible** | Usable with screen readers, keyboards, high contrast, large text, and reduced motion |

### Our Answer

Most sonification maps one number to one pitch. That can be accurate, but it can sound like a repeating beep and fail to communicate the bigger story.

We built the **Earth Orchestra**: several Earth systems playing together as one piece of music.

Each variable controls a different part of the sound, allowing listeners to follow multiple Earth systems by ear.

| Earth Variable | Role in the Music | What You Hear |
|---|---|---|
|  **Global temperature** | Lead voice | A melody that climbs as the planet warms |
|  **Atmospheric CO₂** | Harmony | A pad that becomes denser as CO₂ builds |
|  **Arctic sea ice** | Texture | A glassy shimmer that fades as ice disappears |
|  **Sea level** | Bass | A low drone that grows heavier as seas rise |
|  **Rate of change** | Trend / acceleration | Extra sparkle and movement when changes accelerate |

The goal is for someone to close their eyes and notice the planet warming, CO₂ building up, Arctic ice declining, and sea levels rising across the historical record — **without ever looking at a chart**.

---

#  Features

##  Four Listening Modes

Choose a mode in the **Jukebox Player → Sound Mode**:

###  Earth Orchestra — Flagship

The complete multi-voice Earth soundscape described above.

###  Scientific — Continuous

One smooth tone whose pitch follows the measurement continuously.

###  Musical — Lydian Scale

Each year becomes a note on a musical scale.

###  Accessible — Step + Voice

Step-by-step sonification combined with spoken narration of the values.

---

##  Four Earth Datasets

| Dataset | Years | Source |
|---|---:|---|
|  Global surface temperature anomaly | 1880–2025 | NASA GISS GISTEMP v4 |
|  Atmospheric CO₂ — Mauna Loa | 1959–2025 | NOAA Global Monitoring Laboratory |
|  Arctic September minimum sea ice | 1979–2025 | NSIDC / NASA Sea Ice Index |
|  Global mean sea level rise | 1993–2025 | NASA Sea Level Change Team |

---

#  Hear the Change — A/B Comparison

Play two data streams side by side, one in each ear, and hear how they relate.

When the two signals diverge, a tension tone appears. The faster the divergence, the faster the tension pulse becomes.

### Built-in Scenarios

-  Global temperature — early era **(1880–1925)** vs. modern era **(1980–2025)**
-  CO₂ vs. global temperature **(1959–2025)**
-  Arctic sea ice vs. sea level **(1993–2025)**

### Audio Routing

- **Dual Stereo** — A in the left ear, B in the right
- **Alternating Pulse** — designed for mono speakers

---

#  Earth AI Assistant & Scientific Knowledge Engine

The Earth Information Jukebox includes a built-in **Earth AI Assistant** accessible through the floating 🌍 button.

It contains a structured knowledge system covering Earth science indicators, sonification parameters, and webpage components.

##  Scientific Judge

Ask the assistant to scientifically evaluate Earth data:

```text
Judge 2024
Judge current point
Judge Arctic sea ice loss
Judge temperature warming
```

The assistant provides:

- Evidence-based verdicts
- Severity badges
- Rate-of-change calculations
- Relevant Earth indicators
- Corresponding Earth Orchestra acoustic profiles

Severity levels include:

- **Critical**
- **Elevated**
- **Baseline**

---

##  Deep Earth Science Database

The `EARTH_JUKEBOX_DATABASE` contains:

- 146 years of verified observations
- Decade averages
- Historical baselines
- Physics-based climate relationships
- Sonification parameters

---

##  Navigate the Website with the Assistant

The assistant can also control navigation.

For example:

```text
Jump to compare
Go to explore
Open tutorial
Jump to chart
Show globe
Scroll to scrubber
Show transcript
```

The target component is highlighted with a glowing outline animation.

---

##  Matched to Webpage Settings

The assistant integrates with the website's accessibility and visual settings:

-  Daylight Light Theme
-  Dark Space Theme
-  High Contrast
-  Large Text
-  Reduced Motion

---

##  Voice-Enabled

The assistant supports real-time text-to-speech responses using the **Web Speech API**.

Voice can be independently enabled or disabled with the  control.

---

##  Voice Controls

The assistant can control supported webpage functions through natural language:

```text
Light mode
High contrast
Play orchestra
Mute
Set volume to 80%
Export WAV
```

---

#  Other Features

### Interactive Timeline

-  Play
-   Pause
-  Step through data
-   Scrub through the timeline
-  Change playback speed
-  Loop playback

### Live Visualisation

The interface includes:

- Animated data chart
- Dynamic data orb
- Live audio analyser
- Real-time visual feedback

### WAV Export

Render the complete **Earth Orchestra** as a 16-bit stereo `.wav` file directly in the browser.

### Live Transcript

A running text description of what is being heard.

The transcript can also be downloaded as a `.txt` file.

### Tutorial

A first-visit walkthrough introduces the major features and can be reopened using the **Tutorial** button.

---

#  Accessibility

Accessibility is a core part of the project.

The website supports:

- Screen-reader announcements through ARIA live regions
- Optional spoken narration through the Web Speech API
- High Contrast mode
- Large Text mode
- Reduced Motion mode
- Light and dark themes
- Full keyboard navigation
- Visible keyboard focus outlines
- Large touch targets

---

##  Keyboard Shortcuts

| Key | Action |
|---|---|
| `Space` | Play / pause in the Jukebox Player |
| `←` | Step one year backward |
| `→` | Step one year forward |
| `Esc` | Close the tutorial popup |

---

#  Run It

There is **no build step and no dependency installation required**.

## Option 1 — Open Directly

Double-click:

```text
index.html
```

## Option 2 — Run a Local Server

From the project folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

The application works in current versions of:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

> Browsers generally require a user interaction before starting audio. Press **Play** to begin.

---

#  Project Structure

```text
earth-information-jukebox/
├── index.html   # Page structure, semantic HTML and ARIA
├── style.css    # Themes, components, animations and visual styling
├── app.js       # Data, Web Audio engine, UI logic and WAV exporter
└── README.md    # Project documentation
```

---

#  Customising the Project

##  Visual Design

Colors, glass effects, corners, themes, and interface components are controlled through:

```text
style.css
```

The dark glass interface and pill-style controls are defined there.

##  Data

The yearly data series are embedded near the top of:

```text
app.js
```

##  Sound Design

The `EarthSonifier` class in `app.js` contains the project's sound-generation logic, including:

```text
startOrchestra()
playScientificPoint()
startCompareVoices()
```

and other sonification functions.

##  Important CSS Note

Keep:

```css
.hidden
```

as the final rule in `style.css`.

This ensures hidden elements remain hidden and prevents components such as the tutorial popup from unintentionally covering the page.

---

#  About the Data

The yearly values are embedded directly in `app.js`, allowing the application to work without requiring a network connection for its core datasets.

The data sources are the public NASA, NOAA, and NSIDC records listed above.

For scientific research or formal citation, users should verify individual values against the original datasets rather than relying solely on this application.

---

# Why Sonification?

Data visualisation primarily communicates through sight.

Sonification creates another pathway.

Instead of asking:

> **"Can you see the trend?"**

Earth Information Jukebox asks:

> **"Can you hear the trend?"**

A listener can experience changes in temperature, atmospheric CO₂, Arctic sea ice, and sea level through different musical characteristics.

This makes Earth science more **interactive, memorable, and accessible**.

---

#  NASA Space Apps Challenge 2026

**Challenge:** Earth Information Jukebox

**Project:** Earth Information Jukebox

**Purpose:** Transform Earth observation data into an accessible auditory experience.

**Technology:** HTML · CSS · JavaScript · Web Audio API

---

#  License

This project is licensed under the **MIT License**.
