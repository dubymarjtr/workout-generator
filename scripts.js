// array declaration

const upperB = [
  {
    exercise: 'Traditional push ups',
    reps: '4 x 8',
    weight: 'Your own',
    description:
      'Move into a plank position, with palms down and arms shoulder-width apart. Keep the body in a straight line as you lower the chest until it’s about 2 inches from the floor. Rise back to the start position.',
  },
  {
    exercise: 'Chair dips',
    reps: '4 x 10',
    weight: 'Your own',
    description:
      'Sit on the edge of the chair or bench with your hands on either side of the hips, grasping the arms of the chair or the edge of the bench. Scoot your bottom forward off the edge, keeping it close to the chair or bench. With your shoulders back lower the buttocks down, and then push back up.',
  },
  {
    exercise: 'Bicep curl',
    reps: '4 x 12',
    weight: '5lb',
    description:
      'Grab dumbbells and stand with feet about shoulder-width apart and palms facing forward. Keep shoulders back and elbows close to your sides as you curl the forearms upward toward the upper arm. Squeeze biceps at the top, and then slowly move arms back to the starting position.',
  },
  {
    exercise: 'Triceps kickbacks',
    reps: '4 x 12',
    weight: '5lb',
    description:
      'Move your torso in a 45-degree angle and bend your knees slightly. Squeeze your arms close to your back with the biceps already curled. Extend the arms all the way back and squeeze your triceps. Lower and repeat.',
  },
  {
    exercise: 'Bent-over row',
    reps: '4 x 10',
    weight: '7.5b',
    description:
      'Move your torso in a 45-degree angle and bend your knees slightly. Hold your dumbbells and do a row by pulling your weights toward your chest, keeping your elbows close to your body and squeezing your shoulder blades. Extend the arms toward the floor, and repeat.',
  },
  {
    exercise: 'Arnold press',
    reps: '4 x 10',
    weight: '7.5lb',
    description:
      'Set the bench to a 90 degree angle and keep your back straight. Grab a dumbbell with each hand, elbows tucked to the side. Lift the dumbbells, moving your elbows to rotate the weight out. Bring the dumbbells back down to the starting position, and repeat.',
  },
  {
    exercise: 'Dumbbell bench press',
    reps: '4 x 12',
    weight: '7.5lb',
    description:
      "Lie back on a bench, and grab a dumbbell with each hand, arms bent and dumbbells in front of your shoulders. Press the weights up to arm's length above your chest. Straighten your arms, but don't lock the elbows. Bend your arms and lower the weights back down. Repeat.",
  },
  {
    exercise: 'Dumbbell rear-delt fly',
    reps: '4 x 10',
    weight: '5lb',
    description:
      'Assume a standing position with your feet shoulder-width apart and move your torso until is parallel to the floor. Bent your arms slightly, squeeze your shoulder blades together as you bring the weight upwards. Hold there for a moment and slowly bring your arms back down to the starting position. Repeat.',
  },
  {
    exercise: 'Skull crusher press',
    reps: '4 x 12',
    weight: '10lb',
    description:
      'Grab a barbell and lie back on a bench. Align your wrist and shoulders, holding the barbell up with the arms extended. Begin to lower the barbell towards the forehead while keeping the elbows actively tucked in. Once the bar is at your forehead, drive the bar back up, reversing the path you took to lower the back. Repeat.',
  },
];

const upperI = [
  {
    exercise: 'Band assisted pull ups',
    reps: '3 x 10',
    weight: 'Your own',
    description:
      'Attach a band to the bar and loop the end around your foot.Using a pronated grip, grasp the pull up bar with a slightly wider than shoulder width grip. Depress the shoulder blades and then drive the elbows straight down to the floor. Pull your chin towards the bar until the lats are fully contracted, then slowly lower yourself back to the start position and repeat.',
  },
  {
    exercise: 'Dumbbell floor press',
    reps: '3 x 10',
    weight: '20lb',
    description:
      'Begin sitting on the floor in an upright position. Pick up each dumbbell and set it high in your hip crease while maintaining a tight grip. Slowly lay back while keeping the dumbbells close to your chest and bend your knees to roughly 45 degrees and move your feet up slightly. Press the weights to full extension by contracting your triceps and chest. Slowly lower the weight until both elbows touch the floor then press both dumbbells back to the starting position. Repeat.',
  },
  {
    exercise: 'Standing hammer curl',
    reps: '2 x 15',
    weight: '15lb',
    description:
      'Set up by grasping a set of dumbbells and standing straight up with the dumbbells by your sides. Your palms should be facing your body. Bend your arms slightly to take tension into the biceps. Slowly curl the dumbbells up as far as possible. Squeeze the biceps at the top of the movement, and then slowly lower the weight back to the starting position. Repeat.',
  },
  {
    exercise: "Farmer's carry",
    reps: '4 x 30 seconds',
    weight: '25lb',
    description:
      'Grasp a dumbbell in each hand using a neutral grip and stand up straight. While maintaining an active shoulder position, hold the dumbbells by your side and walk for the designated amount of time.',
  },
  {
    exercise: 'Bend-over dumbbell row',
    reps: '3 x 12',
    weight: '12.5lb',
    description:
      'In a standing position, hold a dumbbell in each hand with a neutral grip. Hinge forward until your torso is roughly parallel with the floor and then begin the movement by driving the elbows behind the body while retracting the shoulder blades. Pull the dumbbells towards your body until the elbows are at the midline and then slowly lower the dumbbells back to the starting position under control. Repeat.',
  },
  {
    exercise: 'Band assisted dip',
    reps: '3 x 12',
    weight: 'your own',
    description:
      'Attach a band to each of the handles on the dip station. Step up onto the dip station and place both knees in the center of the band while positioning your hands on the handles with a neutral grip. Initiate the dip by unlocking the elbows and slowly lowering the body until the forearms are almost parallel with the floor. Then drive back to the starting position by pushing through the palms and repeat.',
  },
  {
    exercise: 'T-Bar row',
    reps: '3 x 12',
    weight: '15lb',
    description:
      'Assume a standing position with the bar positioned directly between your legs. Utilize a v-grip handle and place the bar directly in the notch of the v. Hinge forward until your torso is roughly parallel with the floor and then begin the movement by driving the elbows behind the body while retracting the shoulder blades. Pull the bar towards your body until the plates touch your chest and then slowly lower the handle back to the starting position under control. Repeat.',
  },
  {
    exercise: 'Z press',
    reps: '3 x 12',
    weight: '15lb',
    description:
      'Adjust the safety pins to shoulder height while seated on the floor. Set the bar on the pins, load the desired weight, and sit directly beneath the bar with your legs straight and torso upright. Place your hands at shoulder width with a pronated grip on the bar. Inhale and push the bar to lockout overhead. Exhale once the bar gets to lockout and reverse the movement slowly while controlling the bar back to the pins. Repeat.',
  },
  {
    exercise: 'Incline skull crusher',
    reps: '3 x 12',
    weight: '20lb',
    description:
      'Set the bench in a 30-45 degree angle. Align your wrist and shoulders, holding the barbell up with the arms extended. Begin to lower the barbell towards the forehead while keeping the elbows actively tucked in. Once the bar is at your forehead, drive the bar back up, reversing the path you took to lower the back. Repeat.',
  },
];

const upperA = [
  {
    exercise: 'Pull ups',
    reps: '4 x Maximum',
    weight: 'Your own',
    description:
      'Using a pronated grip, grasp the pull bar with a slightly wider than shoulder width grip. Depress the shoulder blades and then drive the elbows straight down to the floor while activating the lats. Pull your chin towards the bar until the lats are fully contracted, then slowly lower yourself back to the start position and repeat.',
  },
  {
    exercise: 'Incline dumbbell bench press',
    reps: '4 x 12',
    weight: '35lb',
    description:
      'Pick up the dumbbells off the floor using a neutral grip. Position the ends of the dumbbells in your hip crease, and sit down on the edge of an incline bench. Lay back and keep the weights close to your chest. Once you are in position, press the dumbbells to lockout at the top.Slowly lower the dumbbells under control as far as comfortably possible. Contract the chest and push the dumbbells back up to the starting position.Repeat.',
  },
  {
    exercise: 'Overhead press',
    reps: '4 x 12',
    weight: '30lb',
    description:
      'Adjust the barbell to just below shoulder height then load the weight onto the bar. Assume a shoulder width stance and place your hands at shoulder width with a pronated grip on the bar. Step underneath the bar and unrack it while keeping the spine in a neutral position. Take two steps back, inhale, brace, tuck the chin, then press the bar to lockout overhead. Exhale once the bar gets to lockout and reverse the movement slowly while controlling the bar back to your chest. Repeat.',
  },
  {
    exercise: 'Cable face pull',
    reps: '4 x 12',
    weight: '40lb',
    description:
      'Assume a split stance with the arms straight out in front of you utilizing a pronated grip. Inhale and pull the rope towards your face with the elbows high. Slowly lower the rope back to the starting position and repeat.',
  },
  {
    exercise: 'Standing dumbbell curl',
    reps: '4 x 12',
    weight: '20lb',
    description:
      'Start by grasping a pair of dumbbells and standing straight up, feet together and dumbbells by your side. Your palms should facing upwards. Take up the slack by bending the elbows slightly. Tension should be on the biceps. Slowly curl the dumbbells up as far as possible. Squeeze the biceps hard, and then slowly lower the dumbbells back down to the starting position. Repeat.',
  },
  {
    exercise: 'Lat pull down',
    reps: '4 x 12',
    weight: '40lb',
    description:
      'Attach a wide grip handle to the lat pulldown machine and assume a seated position. Grasp the handle with a pronated grip and initiate the movement by depressing the shoulder blade and then flexing the elbow while extending the shoulder. Pull the handle towards your body until the elbows are in line with your torso and then slowly lower the handle back to the starting position under control. Repeat.',
  },
  {
    exercise: 'T-Bar row',
    reps: '4 x 12',
    weight: '35lb',
    description:
      'Assume a standing position with the bar positioned directly between your legs. Utilize a v-grip handle and place the bar directly in the notch of the v. Hinge forward until your torso is roughly parallel with the floor and then begin the movement by driving the elbows behind the body while retracting the shoulder blades. Pull the bar towards your body until the plates touch your chest and then slowly lower the handle back to the starting position under control. Repeat.',
  },
  {
    exercise: 'Rope triceps extension',
    reps: '4 x 12',
    weight: '35lb',
    description:
      'Attach a rope to a cable stack as high as possible and assume a standing position. Grasp the rope with a neutral grip and lean forward slightly by hinging at the hips. Initiate the movement by extending the elbows and flexing the triceps. Pull the rope downward until the elbows are almost locked out and then slowly lower under control back to the starting position. Repeat.',
  },
  {
    exercise: 'Dumbbell floor press',
    reps: '4 x 12',
    weight: '35lb',
    description:
      'Begin sitting on the floor in an upright position. Pick up each dumbbell and set it high in your hip crease while maintaining a tight grip. Slowly lay back while keeping the dumbbells close to your chest and bend your knees to roughly 45 degrees and move your feet up slightly. Press the weights to full extension by contracting your triceps and chest. Slowly lower the weight until both elbows touch the floor then press both dumbbells back to the starting position. Repeat.',
  },
];

const lowerB = [
  {
    exercise: 'Dumbbell goblet squat',
    reps: '4 x 12',
    weight: '10lb',
    description:
      'Select a dumbbell and position it at chest height with one hand under each edge of the dumbbell. Take a deep breath and descend by simultaneously pushing the hips back and bending the knees.Once your thighs reach parallel with the floor, begin to reverse the movement. Keep your abs braced and drive your feet through the floor. Drive back to the starting position and repeat.',
  },
  {
    exercise: 'Landmine Romanian deadlift',
    reps: '4 x 12',
    weight: 'No extra weight',
    description:
      'Stand with a bar in between your legs and lay the bar in the notch of a v-bar with both hands on the handle. Stand tall and begin the RDL by pushing your hips back and hinging forward until the bar is just below knee height. Drive through the whole foot and focus on pushing the floor away. Return to the starting position and repeat for the desired number of repetitions. Repeat.',
  },
  {
    exercise: 'Overhead press',
    reps: '4 x 12',
    weight: '30lb',
    description:
      'Adjust the barbell to just below shoulder height then load the weight onto the bar. Assume a shoulder width stance and place your hands at shoulder width with a pronated grip on the bar. Step underneath the bar and unrack it while keeping the spine in a neutral position. Take two steps back, inhale, brace, tuck the chin, then press the bar to lockout overhead. Exhale once the bar gets to lockout and reverse the movement slowly while controlling the bar back to your chest. Repeat.',
  },
  {
    exercise: 'Dumbbell step up',
    reps: '4 x 10',
    weight: '5lb',
    description:
      'Grab two dumbbells and hold them by your side. In front of you, you should have a straight bench. Lift your left knee and step onto the platform with your left foot. Once your foot is firmly planted on the platform, use your left heel to lift your body up and place your right foot on the platform as well. Pause briefly and then step back with your right leg and carefully return to the starting position. Repeat for each leg.',
  },
  {
    exercise: 'Bodyweight hip trust',
    reps: '4 x 12',
    weight: 'Your own',
    description:
      'Start in a supine position with your back on a bench, knees bent, and feet flat at roughly shoulder width apart. Drive both feet into the floor and squeeze your glutes while bridging your hips up. Lower your hips back to the starting position. Repeat.',
  },
  {
    exercise: 'Dumbbell lunge',
    reps: '4 x 12',
    weight: '10lb',
    description:
      'Stand with feet hip-distance apart with one dumbbell in each hand. Take a step forward with the right leg, bending at the knee until the front thigh is about parallel to the floor. The left leg will also bend to accommodate the right and the left heel will come off the floor. Push off through the right heel and bring the right leg back to the starting position. You can repeat the sequence on the same leg several times before switching to the left side or you can alternate sides.',
  },
  {
    exercise: 'Dumbbell shoulder squat',
    reps: '4 x 12',
    weight: '10lb',
    description:
      'Start with feet slightly wider than hip-distance apart. Rest one dumbbell on each shoulder. Drop the hips back and down. The knees will bend but the heels stay planted on the floor. The torso stays tall and strong with the chest open and facing forward. Continue to lower the hips until the thighs are parallel to the floor. Press into your heels to lift the body back to the starting position. Repeat.',
  },
  {
    exercise: 'Barbell deadlift',
    reps: '4 x 12',
    weight: '10lb',
    description:
      'Hinge forward at the hips, bending the knees. Grab the bar with an overhand grip. Hands should be placed about shoulder-width apart. Engage through the hips, glutes, and core and stand tall lifting the bar as you become fully upright. Now reverse the process, bending the knees and bringing the hips back to lower the bar. Keep the torso strong and the back straight. Once the bar touches the floor, repeat the sequence and lift again.',
  },
  {
    exercise: 'Hip truster',
    reps: '4 x 12',
    weight: '10lb',
    description:
      'Place your upper back against the center edge of the bench and place the weight bar across the hips. Squeeze the glutes and press the bar straight up until the hips are in line with the shoulders and the knees. The bench should support the upper back area. Keep the core tight and maintain a slight chin tuck with your focus down your body. Slowly lower the bar down until the hips are just a few inches off the floor. Squeeze the glutes and lift again.',
  },
];

const lowerI = [
  {
    exercise: 'Dumbbell split squat',
    reps: '4 x 12',
    weight: '17.5lb',
    description:
      'Set up in a split stance position while gripping dumbbells by your side with a neutral grip. Descend by flexing both knees simultaneously and continue until the back knee touches the ground directly beneath the hip. Drive through the front foot and extend the knee as you return to the starting position. Repeat',
  },
  {
    exercise: 'Weighted hyperextension',
    reps: '4 x 12',
    weight: '15lb',
    description:
      'Setup in a hyperextension machine with your feet anchored and torso roughly perpendicular to your legs at a 45 degree angle. Begin in a hinged position, hold a plate to your chest with your arms crossed, and initiate the movement by flexing your glutes. Extend the hips and finish with your body in a straight line. Repeat.',
  },
  {
    exercise: 'Seated calf raise',
    reps: '4 x 12',
    weight: '15lb',
    description:
      'Take a seat on the machine and place the balls of your feet on the platform with your toes pointed forward - your heels will naturally hang off. Position the base of quads under the knee pad and allow your hands to rest on top. Extend your ankles and release the safety bar. Lower the heels by dorsiflexing the ankles until the calves are fully stretched. Extend the ankles and exhale as you flex the calves. Repeat.',
  },
  {
    exercise: 'Sumo deadlift',
    reps: '4 x 10',
    weight: '25lb',
    description:
      'Position the bar over the top of your shoelaces and assume a wide stance. Push your hips back and hinge forward until your torso is nearly parallel with the floor. Pull up slightly on the bar while allowing your hips to drop in a seesaw fashion. Drive through the whole foot and focus on pushing the floor away. Once you have locked out the hips, reverse the movement by pushing the hips back and hinging forward. Return the bar to the floor, reset, and repeat',
  },
  {
    exercise: 'Dumbbell goblet box squat',
    reps: '4 x 12',
    weight: '20lb',
    description:
      'Select a dumbbell and position it at chest height with one hand under each edge of the dumbbell. Take a deep breath and descend by simultaneously pushing the hips back and bending the knees. Once your glutes touch the box behind, reverse the movement. Keep your abs braced and drive your feet through the floor. Drive back to the starting position and repeat.',
  },
  {
    exercise: 'Walking Lunge',
    reps: '4 x 12',
    weight: '15lb',
    description:
      "Stand up straight with a slight bend in your knees and look forward. Step forward with your left leg while maintaining your balance and squat down through your hips. Keep your torso straight and head up. Don't allow your knee to track out over your toes. Continue the movement by driving your left heal into the floor and standing straight up - bringing your right foot forward to meet your left foot. Continue moving forward in this fashion by alternating which leg you lead with. Repeat.",
  },
  {
    exercise: 'Dumbbell shoulder squat',
    reps: '4 x 12',
    weight: '20lb',
    description:
      'Start with feet slightly wider than hip-distance apart. Rest one dumbbell on each shoulder. Drop the hips back and down. The knees will bend but the heels stay planted on the floor. The torso stays tall and strong with the chest open and facing forward. Continue to lower the hips until the thighs are parallel to the floor. Press into your heels to lift the body back to the starting position. Repeat.',
  },
  {
    exercise: 'Barbell deadlift',
    reps: '4 x 12',
    weight: '35lb',
    description:
      'Hinge forward at the hips, bending the knees. Grab the bar with an overhand grip. Hands should be placed about shoulder-width apart. Engage through the hips, glutes, and core and stand tall lifting the bar as you become fully upright. Now reverse the process, bending the knees and bringing the hips back to lower the bar. Keep the torso strong and the back straight. Once the bar touches the floor, repeat the sequence and lift again.',
  },
  {
    exercise: 'Hip truster',
    reps: '4 x 12',
    weight: '35lb',
    description:
      'Place your upper back against the center edge of the bench and place the weight bar across the hips. Squeeze the glutes and press the bar straight up until the hips are in line with the shoulders and the knees. The bench should support the upper back area. Keep the core tight and maintain a slight chin tuck with your focus down your body. Slowly lower the bar down until the hips are just a few inches off the floor. Squeeze the glutes and lift again.',
  },
];

const lowerA = [
  {
    exercise: 'Dumbbell split squat',
    reps: '4 x 12',
    weight: '35lb',
    description:
      'Set up in a split stance position while gripping dumbbells by your side with a neutral grip. Descend by flexing both knees simultaneously and continue until the back knee touches the ground directly beneath the hip. Drive through the front foot and extend the knee as you return to the starting position. Repeat',
  },
  {
    exercise: 'Bulgarian split squat',
    reps: '4 x 12',
    weight: '20lb',
    description:
      'Set up in a split stance position while grasping dumbbells by your side with a neutral grip. Position the back foot on a bench or circular pad to increase the range of motion. Descend by flexing the front knee and continue until the back knee touches the ground directly beneath the hip. Drive through the front foot and extend the knee as you return to the starting position.',
  },
  {
    exercise: 'Leg curl',
    reps: '4 x 12',
    weight: '35lb',
    description:
      'Lay face down on the machine. The padding should be positioned just above the back of your ankles. Tense up the hamstrings by taking the weight slightly off the stack. Squeeze the hamstrings and curl the weight up as far as possible. Squeeze the hamstring hard, and then slowly lower the weight back to the starting position. Repeat.',
  },
  {
    exercise: 'Sumo deadlift',
    reps: '4 x 10',
    weight: '45lb',
    description:
      'Position the bar over the top of your shoelaces and assume a wide stance. Push your hips back and hinge forward until your torso is nearly parallel with the floor. Pull up slightly on the bar while allowing your hips to drop in a seesaw fashion. Drive through the whole foot and focus on pushing the floor away. Once you have locked out the hips, reverse the movement by pushing the hips back and hinging forward. Return the bar to the floor, reset, and repeat',
  },
  {
    exercise: 'Hip abduction machine',
    reps: '4 x 12',
    weight: '50lb',
    description:
      'Setup in an upright position with your back against the pad and your spine neutral. Exhale and push the legs apart as you open the pads. Once your hips are fully externally rotated, slowly return to the starting position. Repeat.',
  },
  {
    exercise: 'Walking Lunge',
    reps: '4 x 12',
    weight: '35lb',
    description:
      "Stand up straight with a slight bend in your knees and look forward. Step forward with your left leg while maintaining your balance and squat down through your hips. Keep your torso straight and head up. Don't allow your knee to track out over your toes. Continue the movement by driving your left heal into the floor and standing straight up - bringing your right foot forward to meet your left foot. Continue moving forward in this fashion by alternating which leg you lead with. Repeat.",
  },
  {
    exercise: 'Romanian deadlift',
    reps: '4 x 12',
    weight: '35lb',
    description:
      'Position the bar over the top of your shoelaces and assume a hip width stance. Assume a double overhand grip just outside of hip width and deadlift the weight into position at the top with the hips and knees locked out. Begin the RDL by pushing your hips back and hinging forward until the bar is just below knee height. Drive through the whole foot and focus on pushing the floor away. Return to the starting position and  repeat.',
  },
  {
    exercise: 'Leg press',
    reps: '4 x 12',
    weight: '90lb',
    description:
      'Load the machine with the desired weight and take a seat. Sit down and position your feet on the sled with a shoulder width stance. Take a deep breath, extend your legs, and unlock the safeties. Lower the weight under control until the legs are roughly 45 degrees or slightly below. Drive the weight back to the starting position by extending the knees but don’t forcefully lockout.',
  },
  {
    exercise: 'Nordic hamstring curl',
    reps: '4 x 12',
    weight: 'Your own',
    description:
      'Setup in a nordic hamstring machine with your hips extended and torso upright. Keeping your hips extended, begin to lower yourself as slowly as possible until you can no longer control the descent. At this point, allow yourself to fall to the floor in a controlled fashion and “catch” yourself with your arms. Give yourself just enough of a push off the floor to get back into a position where you can pull yourself back to the start using your hamstrings. Repeat for the desired number of repetitions.',
  },
];

const abs = [
  {
    exercise: 'Sit ups with towel',
    reps: '4 x 20',
    weight: 'Your own',
    description:
      'Roll up a towel and place it under your lower back. Sit in a butterfly position with the soles of your feet facing each other. Initiate the movement by lying your back on the floor. Inhale. As you exhale, brace your core and lift with your abs. Touch your hands to your feet and repeat.',
  },
  {
    exercise: 'Hip Lifts',
    reps: '4 x 20',
    weight: 'Your own',
    description:
      'Lie on your back and raise your legs up until they are perpendicular with your torso. Pull your navel toward your spine and lift your hips a few inches off of the floor. Lower the hips down to the ground and restart the motion.',
  },
  {
    exercise: 'Flutter kicks',
    reps: '4 x 30',
    weight: 'Your own',
    description:
      'Start on your back and raise your legs until they are straight above your hips. Glue your lower back to the floor by bracing your abs. Then lower your legs as far as you can while keeping your back connected to the ground. Once you’ve found a challenging height raise your feet an inch. Start making small kicks up and down with your legs. Breathe in and out through your nose as you complete the reps.',
  },
  {
    exercise: 'Scissor kicks',
    reps: '4 x 30',
    weight: 'Your own',
    description:
      'Lie on your back and squeeze your abs as if you’re dropping that bellybutton to the floor. Raise your legs slightly while keeping your lower back connected to the ground. Scissor the right leg over the left as you scissor the left leg over the right. Then continuously keep switching until you have completed your reps.',
  },
  {
    exercise: 'Leg lifts',
    reps: '4 x 20',
    weight: 'Your own',
    description:
      'Start on the ground, head facing the ceiling, legs straight out in front. Brace your core by gluing your lower back to the floor. As you maintain that engagement, lift your legs about a foot off the floor. Pulse your feet up and down. Each “up-down” equals one rep.',
  },
  {
    exercise: 'V-sits',
    reps: '4 x 20',
    weight: 'Your own',
    description:
      'Begin on your back with your legs straight in front of you. Sit up and touch your heels as you bring your knees toward your chest. Then lower yourself down as your legs straighten back to the floor. Sit up again to start another rep.',
  },
  {
    exercise: 'Hip dips',
    reps: '4 x 20',
    weight: 'Your own',
    description:
      'Prop yourself up on your right forearm for a side plank hold. Then lower your right hip to the floor. Brace your abs to lift again. Complete your desired reps and do the same on the other side.',
  },
  {
    exercise: 'Toe touches',
    reps: '4 x 20',
    weight: 'Your own',
    description:
      'Begin on your back with your legs pointed toward the ceiling. Crunch up and aim to touch your toes. Lower down and repeat the movement.',
  },
  {
    exercise: 'Plank',
    reps: '4 x 45 seconds',
    weight: 'Your own',
    description:
      'Lie on your stomach, then lift yourself up onto your forearms and toes. Keep your elbows directly beneath your shoulders. Draw your shoulders away from your ears. Squeeze your abs and glutes and keep your hips, neck and spine in one straight line. Aim to hold for anywhere from 20 seconds to a minute. Hold and breathe in and out through your nose.',
  },
];
const p = document.querySelector('p');

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const fname = document.querySelector('#fname').value;
  const lname = document.querySelector('#lname').value;
  const level = document.querySelector('#level').value;
});

function getRandomExercises(array) {
  const max = 9;
  const excercises = [];
  let n = 0;
  while (n < 5) {
    const newRandomIndex = Math.floor(Math.random() * max);
    const newRandomItem = array[newRandomIndex];
    if (!excercises.includes(newRandomItem)) {
      excercises.push(newRandomItem);
      n += 1;
    }
  }
  return excercises;
}

console.log(getRandomExercises(upperB));
