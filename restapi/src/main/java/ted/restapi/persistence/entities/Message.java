package ted.restapi.persistence.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "message")
@NamedQueries({
        @NamedQuery(name = "Message.findAll", query = "SELECT m FROM Message m"),
        @NamedQuery(name = "Message.findByTwoUsers", query = "SELECT m FROM Message m " +
                "WHERE (m.sender.id = ?1 AND m.receiver.id = ?2)" +
                "OR (m.receiver.id = ?1 AND m.sender.id = ?2)")
})
@Cacheable(false)
public class Message implements Serializable {

    private int id;
    private User sender;
    private User receiver;
    private String text;
    private String seen;
    private Date time;

    public Message() {}

    public Message(User sender, User receiver, String text, String seen, Date time) {
        this.sender = sender;
        this.receiver = receiver;
        this.text = text;
        this.seen = seen;
        this.time = time;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "message_id", nullable = false)
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    @ManyToOne
    @JoinColumn(name = "sender_id", referencedColumnName = "user_id")
    public User getSender() { return sender; }
    public void setSender(User sender) { this.sender = sender; }

    @ManyToOne
    @JoinColumn(name = "receiver_id", referencedColumnName = "user_id")
    public User getReceiver() { return receiver; }
    public void setReceiver(User receiver) { this.receiver = receiver; }

    @Column(name = "text")
    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    @Column(name = "seen")
    public String getSeen() { return seen; }
    public void setSeen(String seen) { this.seen = seen; }

    @Column(name = "time")
    @Temporal(TemporalType.TIMESTAMP)
    public Date getTime() { return time; }
    public void setTime(Date time) { this.time = time; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Message message = (Message) o;
        return id == message.id &&
                Objects.equals(sender, message.sender) &&
                Objects.equals(receiver, message.receiver) &&
                Objects.equals(text, message.text);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, sender, receiver, text);
    }
}
