---
title: The UIUN - An Exercise in Accessibility
slug: /uiun
date: 2024-11-15T16:58:00Z
tags: [studies]
---

# The UIUN - An Exercise in Accessibility

The UIUN, or User Interface United Nations, is an exercise intended to give learning designers some hands-on experience thinking about inclusive design--and reckoning with some of the reasons so many UI fail in this regard. For the exercise, each member of the group was assigned a certain population, and tasked with researching and presenting their accessibility needs. Afterwards, the group would negotiate and prioritize the design requirements derived from these needs, and allocate a set amount of resources on which could be implemented into our hypothetical web design.

My group was color vision deficiency (CVD), better known as color blindness. 

My initial findings were that:
<ul>
<li>CVD affects 4.5% of the population, or 300 million people globally.</li>
<li>
There are many different types of CVD, which affect color perception differently.
<ul>
<li>Most commonly, CVD affects the ability to discriminate between red and green.</li>
<li>Other types include tritanopia, which affects yellow vs pink, red vs purple, and blue vs green.</li>
<li>In rare cases, and associated with more significant visual impairments, someone may be completely unable to see in color.</li>
</ul>
</li>
</ul>

4.5% is a large number when we're talking about a group that could potentially be excluded by poor design decisions. But, with the varying types of CVD, it was clear not everyone with it has the same experience--and, by extension, a solution that worked for one person with CVD would be unlikely to work for the entire population. What we needed was:
<ul>
<li>Not to focus too much on the hues in use, since not everyone will perceive them the same way.</li>
<li>To focus on making design elements distinct, regardless of what hue they were perceived to be.</li>
<li>To give some additional cue if color is used to imply meaning.</li>
</ul>

These principles translate fairly immediately into design ideas:
<ul>
<li>Use additional, *meaningful* symbols, labels, etc. to accompany color cues.</li>
<li>Make sure the values of our colors contrast enough, so that regardless of the parent hue, they are clearly differentiated.</li>
</ul>

I once spent several minutes trying to piece together why my code, which had compiled and was working as expected, had a red parentheses, the color that usually indicates a syntax error. After coming up with nothing, I eventually discovered that what I had perceived as read was simply a magenta color that appeared red due to my low screen brightness--it was simply meant to color code a match with its closing parentheses. Sufficient contrast, or an additional symbol besides color, could have avoided the confusion entirely. I don't have CVD, and I could readily think of an instance where I would benefit from the same design changes that could help someone who does.

This revealed a strong underlying theme of this exercise. Inclusive design ideas don't exclusively help people with disabilities--they're often good considerations in general, helping a wide range of users beyond just the ones they were built for. For that reason, I was optimistic about the support I'd receive for my changes going into the negotiation process with my peers. I planned to emphasize color contrast within the values of the palette, since I expected non-color signifiers would not require much argument. I was prompt about prioritizing this aspect of the palette, and with a few additional requirements for colors or color combinations to favor or avoid being wrapped into the original (many of which came from our photosensitivity representative), I was able to secure both my major design suggestions here. 

Overall, the negotiations went very smoothly. My peers seemed very mindful of the importance of all the design considerations presented, even ones that did not directly assist their population. I was most surprised by the overlap between myself and the non-native English speakers representative, as at first glance there wouldn't appear to be much overlap between CVD and multilingual populations. However, acknowledging that many multilingual users are going to have different cultural backgrounds, it brought up the important consideration that the meanings of colors are not universal. People with CVD may miss color-indicated meanings due to a difference in how they perceive the colors, and people with different cultural backgrounds than a designer may miss the meaning because they have a different association with the color. For both, use of additional cues to suggest the content's meaning would be beneficial. As for the groups that were hardest to convince, our representative of baby boomers diverged the most vocally from me. Though there were some places our populations' needs overlapped, such as having good color contrast, the areas where their needs diverged took many of our priorities elsewhere. She was advocating for things like screen reader support over something like non color-dependent cues. 

I don't doubt that either of us acknowledge the usefulness of the other's proposals, but with the limited resources we had to allocate to our final picks, our priorities conflicted. I felt bad about ignoring the suggestions of many others whose proposals did not match well with mine, or who had less support for their suggestions overall. Not a single one of my peers' ideas were without purpose, and all would be helpful inclusions for accessibility. It seems to match many common trends in web design overall, where the less visible accessibility requirements go neglected--and, thanks to that lack of accesibility, it's not always simple for those populations to voice their needs to the people who could make these changes.

In conclusion, this exercise gave me a lot to think about, and many principles to carry into my future designs. My major takeaways from the activity were:
<ul>
<li>Inclusive design helps more people than just those the designer had in mind.</li>
<li>Inclusive design is effortful, and without careful consideration, some important requirements may go overlooked.</li>
<li>It's a lot simpler to dedicate resources to following inclusive design principles from the beginning, instead of trying to find the resources to restructure things later on.</li>
</ul>

![An image showing a row of wooden blocks. The last several spell out "bility", but the first few are tilted so that multiple faces are visible, spelling out either "usa" or "accesi". The word can be read as either "usability" or "accessibility".](../blog/images/uiunImage.jpeg)
I like this image a lot, as I think it reflects one of my major takeaways from the exercise--that design choices often thought of as accessibility features often help usability in general. From [Adobe Stock](https://stock.adobe.com/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bis_editorial%5D=0&filters%5Bfree_collection%5D=0&filters%5Bcontent_type%3Aimage%5D=1&k=accessibility&order=relevance&search_page=2&get_facets=0&search_type=pagination&asset_id=396823252)