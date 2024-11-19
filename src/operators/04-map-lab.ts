import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt elit tellus, id ultricies ipsum ornare non. Proin nunc mi, malesuada et neque non, dictum consequat magna. Duis a tellus a purus efficitur molestie non ornare magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et gravida enim, et tincidunt nibh. Proin quis justo at elit blandit pharetra. Nulla dignissim leo et erat scelerisque consectetur. Etiam ac molestie erat. Ut nec quam tincidunt lectus rutrum commodo. Praesent semper lorem sapien, vitae ultricies erat sagittis id. Phasellus condimentum mollis rutrum. Duis sodales ante tortor, a consectetur ante ornare ultrices.
<br/><br/>
In ac gravida ligula. Cras vel venenatis est, in pharetra diam. Aenean sed ante vitae erat auctor ullamcorper sed et eros. Cras elit nisi, hendrerit ac rutrum vel, aliquet et mauris. Donec suscipit libero blandit tellus varius, tincidunt sagittis nibh molestie. Sed aliquam commodo semper. Duis fringilla risus id arcu vehicula scelerisque. Nunc imperdiet libero in ipsum laoreet, et elementum nisi vehicula. Aenean fringilla vel velit vel convallis. Integer diam quam, tempor vel scelerisque in, pellentesque eget nunc. In sodales consequat justo vulputate dictum. Vestibulum sit amet arcu non lectus rutrum sodales. Nullam rutrum dignissim erat in tempus. Aenean elit turpis, dignissim in egestas quis, auctor in leo. Proin urna eros, sagittis ac luctus sed, lobortis interdum eros. Pellentesque dignissim nunc ut dignissim auctor.
<br/><br/>
Vivamus dapibus eleifend congue. Curabitur sagittis metus eu sem commodo sagittis. Mauris nec enim cursus, condimentum enim vel, imperdiet elit. Integer lacinia quis urna in ornare. Phasellus urna eros, interdum quis efficitur in, porttitor eget enim. Aliquam nec metus nisi. Donec magna justo, fringilla bibendum vulputate quis, maximus eu orci. Quisque ultrices pharetra ullamcorper. Cras accumsan hendrerit sapien, vitae malesuada nunc luctus in. Ut id interdum justo, nec aliquam nunc. Morbi eget nisl mauris.
<br/><br/>
Aliquam erat volutpat. Etiam in nunc dictum, sollicitudin lectus eget, elementum ligula. In vitae magna id tellus varius hendrerit nec non odio. Nam pretium mauris nulla, pellentesque interdum odio bibendum ac. Morbi libero mi, interdum maximus neque sit amet, tincidunt posuere lectus. Morbi diam nulla, dictum id nunc sed, sodales consequat odio. Morbi a risus consectetur, pharetra nisl quis, ultricies purus. Aenean dui orci, lacinia non efficitur ac, mattis at eros. Sed rhoncus, nibh id gravida pulvinar, mauris odio ullamcorper ante, at ullamcorper leo augue quis justo. Fusce aliquam lectus quis sapien convallis lobortis. Quisque eu convallis odio.
<br/><br/>
Aliquam erat volutpat. Aliquam varius, diam eleifend consequat sollicitudin, nunc eros pretium dolor, eu maximus sem mauris vitae est. Integer velit ante, volutpat lacinia tellus vel, maximus scelerisque lorem. Nulla sagittis facilisis libero, ac scelerisque mi accumsan eu. Fusce vehicula fermentum vehicula. Nulla eu elit nec mi maximus auctor ac nec neque. Curabitur nec porttitor nibh, a bibendum nulla. Proin interdum euismod sem maximus scelerisque. Duis ultrices nisl ex, a euismod quam finibus at. Integer imperdiet, lorem eget ultricies interdum, odio lorem lobortis ligula, non mollis risus odio vitae ipsum. Fusce consequat, ligula et lobortis fermentum, ex dui pulvinar nisi, at bibendum risus justo ut urna.  
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//Funcion que haga el calculo
const calculatePercentegeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  console.log({ scrollTop, scrollHeight, clientHeight });

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  // map((event) => calculatePercentegeScroll(event))
  map(calculatePercentegeScroll),
  tap(console.log)
);

progress$.subscribe((percentage) => {
  console.log(percentage);

  progressBar.style.width = `${percentage}%`;
});
