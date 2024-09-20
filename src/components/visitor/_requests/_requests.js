"use server";
// import fs from "fs";

export async function getContributions() {
  const headers = {
    Authorization: `bearer ${process.env.GIT_TOKEN}`,
  };
  const body = {
    query: `query {
            user(login: "${process.env.GIT_USERNAME}") {
              name
              contributionsCollection {
                contributionCalendar {
                  
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
  };
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });
  const data = await response.json();
  const contributionCounts = {};

  // Loop through the weeks and contribution days to collect data
  data.data.user.contributionsCollection.contributionCalendar.weeks.forEach(
    (week) => {
      week.contributionDays.forEach((day) => {
        const date = day.date;
        const contributionCount = day.contributionCount;
        contributionCounts[date] = contributionCount;
      });
    }
  );

  function convertCountsToArray(counts) {
    return Object.entries(counts).map(([date, count]) => ({
      date,
      contributionCount: count,
    }));
  }

  const contributionArray = convertCountsToArray(contributionCounts);
  // console.log(contributionArray);
  // fs.writeFile("contributions.json", JSON.stringify(data, null, 2), (err) => {
  //   if (err) {
  //     console.error("Error writing to file", err);
  //   } else {
  //     console.log("Contributions saved to contributions.json");
  //   }
  // });
  return contributionArray;
}
